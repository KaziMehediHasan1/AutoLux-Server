const express = require("express");
const { paymentData } = require("../Controller/PaymentController");
const route = express.Router();

route.post("/payment", paymentData);
module.exports = route;
