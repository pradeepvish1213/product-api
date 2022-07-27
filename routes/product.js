let express = require('express');
let router = express.Router();
const {ProductController} = require('./../controllers')

/* GET product listing. */
router.get('/', ProductController.productList);
router.get('/detail', ProductController.productDetail);
router.get('/most-viewed', ProductController.mostViewedProduct);


module.exports = router;
