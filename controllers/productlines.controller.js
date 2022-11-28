const { sequelize } = require('../utilities/db');
const db = require('../models/init-models');
const models = db(sequelize);

exports.findAll = (req, res) => {
    models.productlines.findAll()
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No Productlines.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving All Productlines."
        })
    })
};

exports.create = (req, res) => {
    const productline = {
        productLine: req.body.productLine,
        textDescription: req.body.textDescription,
        htmlDescription: req.body.htmlDescription,
        image: req.body.image
    }

    models.productlines.create(productline)
        .then()
};


