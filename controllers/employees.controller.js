const { sequelize } = require('../utilities/db');
const db = require('../models/init-models');
const models = db(sequelize);

exports.findAll = (req, res) => {
    models.employees.findAll()
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No Employees.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving All Employees."
        });
    });
};

exports.create = (req, res) => {
    const employee = {
        employeeNumber: req.body.employeeNumber,
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        extension: req.body.extension,
        email: req.body.email,
        officeCode: req.body.officeCode,
        reportsTo: req.body.reportsTo,
        jobTitle: req.body.jobTitle,
    }

    models.employees.create(employee)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Employee."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.query.id;
    models.employees.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Employee with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
        message: `Error retrieving Employee with id=${id}`
      });
    });
};

exports.update = (req, res) => {
    const id = req.query.id;
    models.employees.update(req.body, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Employee with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Employee with id=${id}`
      });
    });
};

exports.deleteOne = (req, res) => {
    const id = req.query.id;
    models.employees.destroy({
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Employee with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Employee with id=${id}`
      });
    });
};

exports.deleteAll = (req, res) => {
    models.employees.destroy({
      where: {}
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "All Employees were deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Employees.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Employees.`
      });
    });
};


