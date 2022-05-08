var express = require('express');
var router = express.Router();


var utilFunctions = require('../utils/function-utils');
var Meli = require('../services/meli/meli')


/* GET items listing that matches a query. */
router.get('/',(req, res) => {
    const meliService = new Meli();
    meliService.searchItemsByQuery(req.query.q, req.query.limit)

    const result = meliService.getItemsResult$().subscribe(
      data => {
        result.unsubscribe();
        return res.send(JSON.stringify(utilFunctions.addSignature(data)))
      })

    const meliError = meliService.error$
    .subscribe(
      error => {
        meliError.unsubscribe();
        return res.status(error.status).send(error)
    })
  }
);

/* GET item info by id. */
router.get('/:id',(req, res) => {
    const meliService = new Meli();
    meliService.searchItemById(req.params.id);
    meliService.searchItemDescription(req.params.id)
    meliService.getItem$().subscribe(item => meliService.searchCategoryPathRoot(item.category_id));

    const result = meliService.getItemInfo$().subscribe(
      data => {
        result.unsubscribe();
        return res.send(JSON.stringify(utilFunctions.addSignature(data)))
      }
    )

    const meliError = meliService.error$.subscribe(
      error => {
          meliError.unsubscribe();
          return res.status(error.status).send(error.message)
    })
}

);

module.exports = router;
