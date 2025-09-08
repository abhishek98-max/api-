const express = require("express");
const route = express.Router();
const controller = require("../controller/controller")

route.get("/matchDetails/:id", controller.matchDetails);

module.exports = route