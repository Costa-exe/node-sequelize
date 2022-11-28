const { sequelize } = require('../utilities/db');
const db = require('../models/init-models');
const models = db(sequelize);

exports.findAll = (req, res) => {
    models.offices.findAll()
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No Offices.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving All Offices."
        });
    });
};

exports.create = (req, res) => {
    const offices = {
        officeCode: req.body.officeCode,
        city: req.body.city,
        phone: req.body.phone,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        state: req.body.state,
        country: req.body.country,
        postalCode: req.body.postalCode,
        territory: req.body.territory
    }

    models.offices.create(offices)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Office."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.query.id;
    models.offices.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Office with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
        message: `Error retrieving Office with id=${id}`
      });
    });
};

exports.update = (req, res) => {
    const id = req.query.id;
    models.offices.update(req.body, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Office was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Office with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Office with id=${id}`
      });
    });
};

exports.deleteOne = (req, res) => {
    const id = req.query.id;
    models.offices.destroy({
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Office was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Office with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Office with id=${id}`
      });
    });
};

exports.deleteAll = (req, res) => {
    models.offices.destroy({
      where: {}
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "All Offices were deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Offices.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Offices.`
      });
    });
};