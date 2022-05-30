module.exports = app => {
    const bicicletas = require("../controllers/bicicletas.controller.js");
    var router = require("express").Router();
    router.post("/", bicicletas.create);
    router.get("/", bicicletas.findAll);
    router.get("/:id", bicicletas.findOne);
    app.use("/api/bicicletas", router);
};