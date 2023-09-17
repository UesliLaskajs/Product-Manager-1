const Product = require("../models/product.model")


module.exports.getData = (req, res) => {
    Product.find()
        .then((products) => res.json(products))
        .catch(err => response.json(err));
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(prod => response.json(prod))
        .catch(err => response.json(err));
}

module.exports.getOne = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then((singleProduct) => {
            res.json(singleProduct)
        })
        .catch(err => response.json(err));
}

module.exports.updateOne = (req, res) => {
    Product.updateOne({ _id: req.params.id }, req.body, { new: true })
        .then((deleteProduct) => {
            res.json(deleteProduct)
        })
        .catch((err) => {
            console.log("Error getting data", err)

        })
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}



