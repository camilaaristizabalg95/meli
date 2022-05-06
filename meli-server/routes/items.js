var express = require('express');
var router = express.Router();
var FetchWrapper = require('../utils/fetchWrapper')
var mapItem = require('../utils/mapItem')

const meliAPI = new FetchWrapper('https://api.mercadolibre.com')

/* GET items listing that matches a query. */
router.get('/',(req, res) => {

    meliAPI.get(`sites/MLA/search?q=${req.query.q}`)
    .then((data) => {
      let {results} = data
      results = results.map(result => mapItem(result))
      res.send(JSON.stringify(results))
    }).catch(error => console.error(error))
  }

);

/* GET item info by id. */
router.get('/:id',(req, res) => {

  const promisArr = [
    meliAPI.get(`items/${req.params.id}`),
    meliAPI.get(`items/${req.params.id}/description`)
  ]

  Promise.all(promisArr).then((data)=>{
    const result = mapItem({...data[0],...data[1]})
    res.send(JSON.stringify(result))
  }).catch(error=>console.error(error))
}

);

module.exports = router;
