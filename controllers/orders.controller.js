const db = require('classicmodels');
const orders = require('../models/orders');
const Orders = db.orders;
const Op = db.Sequelize.Op;
  const orders = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    author: req.body.author,
    published: req.body.published ? req.body.published : false
  };  Orders.create(orders)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while creating the Tutorial."
     });
    });


  const id = req.params.id;
  Orders.findByPk(id)
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
      message: "Error retrieving Orders with id=" + id
    });
  });


  const id = req.params.id;
  Orders.update(req.body, {
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
      message: "Error updating Orders with id=" + id
    });
  });

  const id = req.params.id;
  Orders.destroy({
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
      message: "Could not delete Orders with id=" + id
    });
  });
