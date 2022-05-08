var express = require('express');
var router = express.Router();

var FetchWrapper = require('../utils/fetchWrapper');

const meliAPI = new FetchWrapper('https://api.mercadolibre.com')

/* GET category path info by id. */
router.get('/:id',(req, res) => {
    meliAPI.get(`categories/${req.params.id}`)
    .then((data)=> (res.send(data.path_from_root)))
    .catch(error => {throw Error(error)})
  }
);

/* GET category link by id. */
router.get('/info/:id',(req, res) => {
    meliAPI.get(`categories/${req.params.id}`)
    .then((data)=> (res.send({...{}, description: data.name, link: data.permalink, id: data.id})))
    .catch(error => {throw new Error(error)})
  }
);

module.exports = router;