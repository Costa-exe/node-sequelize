module.exports = app => {
    const employees = require("../controllers/employees.controller");

    var router = require('express').Router();
    router.get("/find/all", employees.findAll);
    router.get("find/specific", employees.findOne);
    router.put("/update", employees.update);
    router.post("/create", employees.create);
    router.delete("/delete/all", employees.deleteAll);
    router.delete("/delete/specific", employees.deleteOne);

    app.use("/api/employees", router);
};