var express = require('express');
var router = express.Router();
var FetchWrapper = require('../utils/fetchWrapper')
var mapItem = require('../utils/mapItem')

const meliAPI = new FetchWrapper('https://api.mercadolibre.com/sites/MLA')

/* GET items listing that matches a query. */
router.get('/',(req, res) => {
    meliAPI.get(`search?q=${req.query.q}`)
    .then((data) => {
      let {results} = data
      results = results.map(result => mapItem(result))
      res.send(JSON.stringify(results))
    }).catch(error => console.error(error))
  }
);

module.exports = router;
