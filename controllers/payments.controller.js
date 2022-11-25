const db = require('classicmodels');
const payments = require('../models/payments');
const Payments = db.payments;
const Op = db.Sequelize.Op;
  const payments = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    author: req.body.author,
    published: req.body.published ? req.body.published : false
  };  Payments.create(payments)
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
  Payments.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Payments with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
      message: "Error retrieving Payments with id=" + id
    });
  });


  const id = req.params.id;
  Payments.update(req.body, {
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Payments was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Payments with id=${id}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Payments with id=" + id
    });
  });

  const id = req.params.id;
  Payments.destroy({
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Payments was deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete Payments with id=${id}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete Payments with id=" + id
    });
  });
