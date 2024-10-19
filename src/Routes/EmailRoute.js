const express = require("express");
const { createMailData } = require("../Controller/EmailController");
const route = express.Router();
// create data ..
route.post("/email", createMailData);

module.exports = route;
