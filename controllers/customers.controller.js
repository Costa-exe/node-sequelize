const { sequelize } = require('../utilities/db');
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
        });
    });
};

exports.create = (req, res) => {
    const customer = {
        customerNumber: req.body.customerNumber,
        customerName: req.body.customerName,
        contactLastName: req.body.contactLastName,
        contactFirstName: req.body.contactFirstName,
        phone: req.body.phone,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        state: req.body.state,
        postalCode: req.body.postalCode,
        country: req.body.country,
        salesRepEmployeeNumber: req.body.salesRepEmployeeNumber,
        creditLimit: req.body.creditLimit
    }

    models.customers.create(customer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Customer."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.query.id;
    models.customers.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Customer with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
        message: `Error retrieving Customer with id=${id}`
      });
    });
};

exports.update = (req, res) => {
    const id = req.query.id;
    models.customers.update(req.body, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Customer was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Customer with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Customer with id=${id}`
      });
    });
};

exports.deleteOne = (req, res) => {
    const id = req.query.id;
    models.customers.destroy({
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Customer was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Customer with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Customer with id=${id}`
      });
    });
};

exports.deleteAll = (req, res) => {
    models.customers.destroy({
      where: {}
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "All Customers were deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Customers.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Customers.`
      });
    });
};


