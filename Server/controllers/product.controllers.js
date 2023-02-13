const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
/////////////////////////
//CREAR PRODUCTO
/////////////////////////
module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description,
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}
///////////////////////////////////
//LISTAR TODOS LOS PRODUCTOS///////
///////////////////////////////////
module.exports.findAllProducts = async (req, res) => {
    const allProducts = await Product.find();
    res.json(allProducts);
}

///////////////////////////////////
//LISTAR UN SOLO PRODUCTO /////////
///////////////////////////////////
module.exports.findOneProduct = async (req, res) => {
    const allProduct = await Product.findOne({ _id: req.params.id });
    res.json(allProduct);
}

///////////////////////////////////
//////ACTUALIZAR PRODUCTO /////////
///////////////////////////////////
module.exports.updateProduct = async (req, res) => {
    const updateData = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.json(updateData);
}

///////////////////////////////////
////////ELIMINAR PRODUCTO /////////
///////////////////////////////////
module.exports.deleteProduct = async (req, res) => {
    const confDelete = await Product.deleteOne({ _id: req.params.id })
    res.json(confDelete);
}
