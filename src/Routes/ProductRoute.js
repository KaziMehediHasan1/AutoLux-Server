const express = require("express");
const {
  createProduct,
  readProduct,
  getProductPaginate,
  dashBoardProductDeleteById,
} = require("../Controller/ProductController");
const route = express.Router();
route.post("/product", createProduct);
route.get("/readProduct", readProduct);
route.get("/gerProductPaginate", getProductPaginate);
route.delete("/deleteProduct/:id", dashBoardProductDeleteById);
module.exports = route;
