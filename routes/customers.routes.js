module.exports = app => {
    const customers = require("../controllers/customers.controller");

    var router = require('express').Router();
    router.get("/all", customers.findAll);

    app.use("/api/customers", router);
};