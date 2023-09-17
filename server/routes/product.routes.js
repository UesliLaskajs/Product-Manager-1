const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.get("/products",ProductController.getData)
    app.post('/products/product', ProductController.createProduct);    
    app.get('/products/:id',ProductController.getOne)
}

