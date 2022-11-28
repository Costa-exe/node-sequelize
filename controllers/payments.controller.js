exports.findAll = (req, res) => {
  models.payments.findAll()
  .then(data => {
      if (data) {
          res.send(data);
      } else {
          res.status(404).send({
              message: `No Payments.`
          });
      }
  }).catch(err => {
      res.status(500).send({
          message: "Error retrieving All Payments."
      });
  });
};

exports.create = (req, res) => {
  const payments = {
      customerNumber: req.body.customerNumber,
      checkNumber: req.body.checkNumber,
      paymentDate: req.body.paymentDate,
      amount: req.body.amount
  }

  models.payments.create(payments)
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message:
              err.message || "Some error occurred while creating the Payments."
          });
      });
};

exports.findOne = (req, res) => {
  const id = req.query.id;
  models.payments.findByPk(id)
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
      message: `Error retrieving Payments with id=${id}`
    });
  });
};

exports.update = (req, res) => {
  const id = req.query.id;
  models.payments.update(req.body, {
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
      message: `Error updating Payments with id=${id}`
    });
  });
};

exports.deleteOne = (req, res) => {
  const id = req.query.id;
  models.payments.destroy({
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
      message: `Could not delete Payments with id=${id}`
    });
  });
};

exports.deleteAll = (req, res) => {
  models.payments.destroy({
    where: {}
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "All Payments were deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete Payments.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: `Could not delete Payments.`
    });
  });
};