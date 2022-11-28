module.exports = app => {
    const customers = require("../controllers/customers.controller");

    var router = require('express').Router();
    router.get("/find/all", customers.findAll);
    router.get("/find/specific", customers.findOne);
    router.put("/update", customers.update);
    router.post("/create", customers.create);
    router.delete("/delete/all", customers.deleteAll);
    router.delete("/delete/specific", customers.deleteOne);

    app.use("/api/customers", router);
};