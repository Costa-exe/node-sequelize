module.exports = app => {
    const offices = require("../controllers/offices.controller");

    var router = require('express').Router();
    router.get("/find/all", productlines.findAll);
    router.get("find/specific", productlines.findOne);
    router.put("/update", productlines.update);
    router.post("/create", products.create);
    router.delete("/delete/all", productlines.deleteAll);
    router.delete("/delete/specific", productlines.deleteOne);

    app.use("/api/offices", router);
};