module.exports = app => {
    const calcController = require("../controllers/calc.controller.js");
    const { isAuthenticated } = require("../middlewares/isAuthenticated.js")
    const router = require("express").Router();

    router.put("/:conta", isAuthenticated, calcController.calc);


    app.use('/api/calc', router);
};