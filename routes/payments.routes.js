module.exports = app => {
    const payments = require("../controllers/payments.controller");

    var router = require('express').Router();
    router.get("/find/all", payments.findAll);
    router.get("find/specific", payments.findOne);
    router.put("/update", payments.update);
    router.post("/create", payments.create);
    router.delete("/delete/all", payments.deleteAll);
    router.delete("/delete/specific", payments.deleteOne);

    app.use("/api/payments", router);
};