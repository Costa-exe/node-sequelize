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
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Productline."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.query.id;
    models.productlines.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Productline with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
        message: `Error retrieving Productline with id=${id}`
      });
    });
};

exports.update = (req, res) => {
    const id = req.query.id;
    models.productlines.update(req.body, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Productline was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Productline with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Productline with id=${id}`
      });
    });
};

exports.deleteOne = (req, res) => {
    const id = req.query.id;
    models.productlines.destroy({
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Productline was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Productline with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Productline with id=${id}`
      });
    });
};

exports.deleteAll = (req, res) => {
    models.productlines.destroy({
      where: {}
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "All Productlines were deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Productlines.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Productlines.`
      });
    });
};


