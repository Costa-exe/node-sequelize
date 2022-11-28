module.exports = app => {
    const orderDetails = require("../controllers/orderdetails.controller");

    var router = require('express').Router();
    router.get("/find/all", orderDetails.findAll);
    router.get("/find/specific", orderDetails.findOne);
    router.put("/update", orderDetails.update);
    router.post("/create", orderDetails.create);
    router.delete("/delete/all", orderDetails.deleteAll);
    router.delete("/delete/specific", orderDetails.deleteOne);

    app.use("/api/orderDetails", router);
};