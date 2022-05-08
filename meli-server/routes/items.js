var express = require('express');
var router = express.Router();
var FetchWrapper = require('../utils/fetchWrapper');
var utilFunctions = require('../utils/function-utils');
var CustomError = require('../utils/customError');
var Meli = require('../utils/meli')

const meliAPI = new FetchWrapper('https://api.mercadolibre.com')
const api = new FetchWrapper('http://localhost:3000', false)

const meliService = new Meli();

/* GET items listing that matches a query. */
router.get('/',(req, res) => {
    meliService.searchItemsByQuery(req.query.q, req.query.limit)

    const result = meliService.getItemsResult$().subscribe(
      data => {
        console.log('ayy')
        res.send(JSON.stringify(utilFunctions.addSignature(data)))
        result.unsubscribe();
        return
      })

    const meliError = meliService.error$
    .subscribe(
      error => {
        console.log('juemama', error.message)
        res.status(error.status).send(error)
        meliError.unsubscribe();
        return
    })
  }
);

/* GET item info by id. */
router.get('/:id',(req, res) => {
    meliService.searchItemById(req.params.id);
    meliService.searchItemDescription(req.params.id)
    meliService.getItem$().subscribe(item => meliService.searchCategoryPathRoot(item.category_id));

    const result = meliService.getItemInfo$().subscribe(
      data => {
        result.unsubscribe();
        return res.send(JSON.stringify(utilFunctions.addSignature(data)))
      }
    )

    // const meliError = meliService.error$.subscribe(
    //   error => {
    //     console.log(error)
    //       meliError.unsubscribe();
    //       return res.status(error.status).send(error.message)
    // })
}

);

module.exports = router;
