const Product = require("../models/product.model")


module.exports.getData=(req,res)=>{
    Product.find()
    .then((products)=>res.json(products))
    .catch(err => response.json(err));
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(prod => response.json(prod))
        .catch(err => response.json(err));
}

module.exports.getOne=(req,res)=>{
    Product.findOne({_id:req.params.id})
    .then((singleProduct)=>{
        res.json(singleProduct)
    })
    .catch(err => response.json(err));
}
