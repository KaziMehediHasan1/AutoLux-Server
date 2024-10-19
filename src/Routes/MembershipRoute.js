const express = require("express");
const { getMemberShipCard } = require("../Controller/MembershipController");
const route = express.Router();
route.get("/membership", getMemberShipCard);
module.exports = route;
