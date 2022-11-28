const { sequelize } = require('../utilities/db');
const db = require('../models/init-models');
const models = db(sequelize);

exports.findAll = (req, res) => {
  models.orders.findAll()
  .then(data => {
      if (data) {
          res.send(data);
      } else {
          res.status(404).send({
              message: `No Orders.`
          });
      }
  }).catch(err => {
      res.status(500).send({
          message: "Error retrieving All Orders."
      });
  });
};

exports.create = (req, res) => {
  const orders = {
      orderNumber: req.body.orderNumber,
      orderDate: req.body.orderDate,
      requiredDate: req.body.requiredDate,
      shippedDate: req.body.shippedDate,
      status: req.body.status,
      comments: req.body.comments,
      customerNumber: req.body.customerNumber
  }

  models.orders.create(orders)
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message:
              err.message || "Some error occurred while creating the Orders."
          });
      });
};

exports.findOne = (req, res) => {
  const id = req.query.id;
  models.orders.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Orders with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
      message: `Error retrieving Orders with id=${id}`
    });
  });
};

exports.update = (req, res) => {
  const id = req.query.id;
  models.orders.update(req.body, {
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Orders was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Orders with id=${id}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: `Error updating Orders with id=${id}`
    });
  });
};

exports.deleteOne = (req, res) => {
  const id = req.query.id;
  models.orders.destroy({
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Orders was deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete Orders with id=${id}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: `Could not delete Orders with id=${id}`
    });
  });
};

exports.deleteAll = (req, res) => {
  models.orders.destroy({
    where: {}
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "All Orders were deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete Orders.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: `Could not delete Orders.`
    });
  });
};