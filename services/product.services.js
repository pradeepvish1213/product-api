const DB = require('./../database/models')

function findAll(params) {
    return DB.Product.findAll(params)
}

function findOne(params) {
    return DB.Product.findOne(params)
}

function update(productId, data) {
    return DB.Product.update(data, {where: {id: productId}});
}

module.exports = {findAll, findOne, update}