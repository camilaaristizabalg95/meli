var express = require('express');
var router = express.Router();
var FetchWrapper = require('../utils/fetchWrapper')
var mapItem = require('../utils/mapItem')
var utilFunctions = require('../utils/function-utils')

const meliAPI = new FetchWrapper('https://api.mercadolibre.com')

/* GET items listing that matches a query. */
router.get('/',(req, res) => {

    meliAPI.get(`sites/MLA/search?q=${req.query.q}`)
    .then((data) => {
      let {results} = data

      if(results.length === 0) {
        res.status(404).send('No hay items para esta busqueda')
        return
      }

      const mostRepeatedCat = utilFunctions.getMostRepeatedItem(results.map(result => result.category_id))

      meliAPI.get(`categories/${mostRepeatedCat}`)
      .then((data) => {
        const categories = data.path_from_root.map(path => path.name)

        results = {
          ...{}, 
          items:results.map(result => mapItem(result)), 
          categories
        }

        res.send(JSON.stringify(utilFunctions.addSignature(results)))
      }).catch(error => console.error(error))

    }).catch(error => console.error(error))
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
    meliAPI.get(`categories/${item.category_id}`)
    .then((data) => {
      const categories = data.path_from_root.map(path => path.name)

      result = {
        ...result,
        item: {
          ...result.item,
          categories
        }
      }
  
      res.send(JSON.stringify(utilFunctions.addSignature(result)))
    })
  }).catch(error => res.status(404).send('No hay items para esta busqueda'))
}

);

module.exports = router;
