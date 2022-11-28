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
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Product."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.query.id;
    models.products.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Product with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
        message: `Error retrieving Product with id=${id}`
      });
    });
};

exports.update = (req, res) => {
    const id = req.query.id;
    models.products.update(req.body, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Product with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Product with id=${id}`
      });
    });
};

exports.deleteOne = (req, res) => {
    const id = req.query.id;
    models.products.destroy({
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Product with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Product with id=${id}`
      });
    });
};

exports.deleteAll = (req, res) => {
    models.products.destroy({
      where: {}
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "All Products were deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Products.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Products.`
      });
    });
};



