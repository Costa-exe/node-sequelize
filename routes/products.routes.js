module.exports = app => {
    const offices = require("../controllers/offices.controller");

    var router = require('express').Router();
    router.get("/find/all", products.findAll);
    router.get("/find/specific", products.findOne);
    router.put("/update", products.update);
    router.post("/create", products.create);
    router.delete("/delete/all", products.deleteAll);
    router.delete("/delete/specific", products.deleteOne);

    app.use("/api/offices", router);
};