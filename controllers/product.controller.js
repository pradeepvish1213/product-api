const Joi = require('joi')
const {Utils} = require('./../utils')
const {ProductService} = require('./../services')

async function productList(req, res, next) {
    try {
        let params = req.query;
        const schema = Joi.object({
            result: Joi.number().precision(0).required(),
            currencyCode: Joi.string().trim().valid('', 'USD', 'CAD').optional()
        });

        const paramValue = await schema.validateAsync(params);
        let productList = await ProductService.findAll({
            limit: paramValue.result
        });

        productList = await productPriceConvert(paramValue.currencyCode, productList);
        res.json(productList)
    } catch (e) {
        next(e)
    }
}


async function productDetail(req, res, next) {
    try {
        let params = req.query;
        const schema = Joi.object({
            productId: Joi.number().required(),
            currencyCode: Joi.string().trim().valid('', 'USD', 'CAD').optional()
        })

        const paramValue = await schema.validateAsync(params);

        let productDetail = await ProductService.findOne({
            where: {id: paramValue.productId},
            raw: true
        })
        if (productDetail) {
            productDetail = await productPriceConvert(paramValue.currencyCode, productDetail)
            productDetail.productViewed = productDetail.productViewed + 1
            await productViewed(paramValue.productId, productDetail.productViewed)
        }
        res.json(productDetail)
    } catch (e) {
        next(e)
    }
}

async function productViewed(productId, views = 0) {
    await ProductService.update(productId, {productViewed: views})
}


async function mostViewedProduct(req, res, next) {
    try {
        let params = req.query;
        const schema = Joi.object({
            result: Joi.number().precision(0).optional(),
            currencyCode: Joi.string().trim().valid('', 'USD', 'CAD').optional()
        })

        const paramValue = await schema.validateAsync(params);
        paramValue.result = paramValue.result ? paramValue.result : 5
        let productList = await ProductService.findAll({
            limit: paramValue.result,
            order: [['productViewed', 'DESC']]
        })
        productList = await productPriceConvert(paramValue.currencyCode, productList);
        res.json(productList)
    } catch (e) {
        next(e)
    }
}

async function productPriceConvert(currencySymbol, productList) {
    let currencyBase = currencySymbol ? currencySymbol : 'USD';
    currencyBase = currencyBase.toUpperCase()
    let currency = await Utils.currentCurrency(currencyBase)
    if (currency) {
        let baseCurrencyRate = currency.rates['USD']
        let toCurrencyRate = currency.rates[currencyBase];
        if (toCurrencyRate) {
            if (Array.isArray(productList)) {
                productList = productList.map(product => {
                    product.price = ((toCurrencyRate / baseCurrencyRate) * product.price).toFixed(2);
                    return product
                })
            } else {
                productList.price = ((toCurrencyRate / baseCurrencyRate) * productList.price).toFixed(2);
            }
        }
    }
    return productList
}

module.exports = {productList, productDetail, mostViewedProduct}