const express = require("express");
const { paymentData } = require("../Controller/PaymentController");
const route = express.Router();
// create payment data..
route.post("/payment", paymentData);
module.exports = route;
