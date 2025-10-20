const express = require("express");
const route = express.Router();
const controller = require("../controller/controller")

// Cricket matches aur match details ke routes
route.get("/matches", controller.getMatches);
route.get("/match-details/:eventId", controller.getMatchDetails);

module.exports = route