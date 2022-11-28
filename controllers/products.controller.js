const { sequelize } = require('../utilities/db');
const db = require('../models/init-models');
const models = db(sequelize);

exports.findAll = (req, res) => {
    models.products.findAll()
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No Products.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving All Products."
        })
    })
};

exports.create = (req, res) => {
    const product = {
        productCode: req.body.productCode,
        productName: req.body.productName,
        productLine: req.body.productLine,
        productScale: req.body.productScale,
        productVendor: req.body.productVendor,
        productDescription: req.body.productDescription,
        quantityInStock: req.body.quantityInStock,
        buyPrice: req.body.buyPrice,
        MSRP: req.body.MSRP
    }

    models.products.create(product)
        .then()
};
