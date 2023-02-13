const ProductController = require('../controllers/product.controllers');
module.exports = function (app) {
    app.get('/api', ProductController.index);
    app.get('/api/product', ProductController.findAllProducts);
    app.get('/api/product/:id', ProductController.findOneProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
    app.post('/api/product/new', ProductController.createProduct);
}
