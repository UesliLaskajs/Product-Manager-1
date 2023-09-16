const Product = require("../models/product.model")



module.exports.getData=(req,res)=>{
    Product.find()
    .then((products)=>res.json({product:products}))
    .catch(err => response.json(err));
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(prod => response.json(prod))
        .catch(err => response.json(err));
}

