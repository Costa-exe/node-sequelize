const { sequelize } = require('../models/db');
const db = require('../models/init-models');
const models = db(sequelize);

exports.findAll = (req, res) => {
    models.customers.findAll()
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No Customers.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving All Customers."
        })
    })
}


