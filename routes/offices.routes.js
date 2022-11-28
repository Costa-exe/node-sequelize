module.exports = app => {
    const offices = require("../controllers/offices.controller");

    var router = require('express').Router();
    router.get("/find/all", offices.findAll);
    router.get("find/specific", offices.findOne);
    router.put("/update", offices.update);
    router.post("/create", offices.create);
    router.delete("/delete/all", offices.deleteAll);
    router.delete("/delete/specific", offices.deleteOne);

    app.use("/api/offices", router);
};