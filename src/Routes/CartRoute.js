const express = require("express");
const {
  postProductDataInCart,
  getCartData,
  cartDataDelete,
  findByMailAndDelete,
} = require("../Controller/CartController");
const route = express.Router();

// create
route.post("/cart", postProductDataInCart);
route.get("/cartData", getCartData);
route.delete("/cartItem/:id", cartDataDelete);
route.delete("/cartItems/:email", findByMailAndDelete);
module.exports = route;
