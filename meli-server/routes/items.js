var express = require('express');
var router = express.Router();
var FetchWrapper = require('../utils/fetchWrapper');
var mapItem = require('../utils/mapItem');
var utilFunctions = require('../utils/function-utils');
var CustomError = require('../utils/customError');

const meliAPI = new FetchWrapper('https://api.mercadolibre.com')
const api = new FetchWrapper('http://localhost:3000', false)

/* GET items listing that matches a query. */
router.get('/',(req, res) => {

    meliAPI.get(`sites/MLA/search?q=${req.query.q}&limit=${req.query.limit}`)
    .then((data) => {
      let {results} = data

      if(results.length === 0) {
        throw new CustomError('Lo sentimos, no encontramos items para esta busqueda', 404)
      }

      const mostRepeatedCat = utilFunctions.getMostRepeatedItem(results.map(result => result.category_id))

      api.get(`categories/${mostRepeatedCat}`)
      .then((categories) => {
        utilFunctions.getCategoriesNameAndLink(categories)
        .then(categoriesInfo =>{
          results = {
            ...{}, 
            items: results.map(result => mapItem(result)), 
            categories: categoriesInfo
          }
          res.send(JSON.stringify(utilFunctions.addSignature(results)))
        }).catch(error => res.status(error.status).send(error.message))
      }).catch(error => res.status(error.status).send(error.message))

    }).catch(error => res.status(error.status).send(error.message))
  }

);

/* GET item info by id. */
router.get('/:id',(req, res) => {

  const promisArr = [
    meliAPI.get(`items/${req.params.id}`),
    meliAPI.get(`items/${req.params.id}/description`)
  ]

  Promise.all(promisArr).then(([item, description])=>{
    let result = {
        ...{},
        item: mapItem({...item,...description})
    }
    api.get(`categories/${item.category_id}`)
    .then((categories) => {
      utilFunctions.getCategoriesNameAndLink(categories)
      .then(categoriesInfo => {
        result = {
          ...result,
          item: {
            ...result.item,
            categories: categoriesInfo
          }
        }
        res.send(JSON.stringify(utilFunctions.addSignature(result)))
      })
    })
  }).catch(error => res.status(404).send('Lo sentimos, no encontramos items para esta busqueda'))
}

);

module.exports = router;
