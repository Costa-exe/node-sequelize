module.exports = app => {
    const orders = require("../controllers/orders.controller");

    var router = require('express').Router();
    router.get("/find/all", orders.findAll);
    router.get("find/specific", orders.findOne);
    router.put("/update", orders.update);
    router.post("/create", orders.create);
    router.delete("/delete/all", orders.deleteAll);
    router.delete("/delete/specific", orders.deleteOne);

    app.use("/api/orders", router);
};