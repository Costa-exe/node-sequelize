const db = require('classicmodels');
const orderdetails = require('../models/orderdetails');
const Orderdetails = db.orderdetails;
const Op = db.Sequelize.Op;
  const orderdetails = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    author: req.body.author,
    published: req.body.published ? req.body.published : false
  };  Orderdetails.create(orderdetails)
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
  Orderdetails.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Orderdetails with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
      message: "Error retrieving Orderdetails with id=" + id
    });
  });


  const id = req.params.id;
  Orderdetails.update(req.body, {
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Orderdetails was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Orderdetails with id=${id}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Orderdetails with id=" + id
    });
  });

  const id = req.params.id;
  Orderdetails.destroy({
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Orderdetails was deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete Orderdetails with id=${id}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete Orderdetails with id=" + id
    });
  });
