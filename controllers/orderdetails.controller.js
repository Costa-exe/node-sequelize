const { sequelize } = require('../utilities/db');
const db = require('../models/init-models');
const models = db(sequelize);

exports.findAll = (req, res) => {
    models.orderdetails.findAll()
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No Order Details.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving Order Details."
        });
    });
};

exports.create = (req, res) => {
    const orderdetails = {
        orderNumber: req.body.orderNumber,
        productCode: req.body.productCode,
        quantityOrdered: req.body.quantityOrdered,
        priceEach: req.body.priceEach,
        orderLineNumber: req.body.orderLineNumber
    }

    models.orderdetails.create(orderdetails)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Order Details."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.query.id;
    models.orderdetails.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Order Details with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
        message: `Error retrieving Order Details with id=${id}`
      });
    });
};

exports.update = (req, res) => {
    const id = req.query.id;
    models.orderdetails.update(req.body, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Order Details was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Order Details with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Order Details with id=${id}`
      });
    });
};

exports.deleteOne = (req, res) => {
    const id = req.query.id;
    models.orderdetails.destroy({
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Order Details was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Order Details with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Order Details with id=${id}`
      });
    });
};

exports.deleteAll = (req, res) => {
    models.orderdetails.destroy({
      where: {}
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "All Order Details were deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Order Details.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Order Details.`
      });
    });
};


