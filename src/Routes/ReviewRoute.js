const express = require("express");
const {
  postReview,
  getAllReview,
  findByIdAndDeleteOne,
  findOneAndUpdate,
} = require("../Controller/ReviewController");
const route = express.Router();
route.post("/review", postReview);
route.get("/allReviews", getAllReview);
route.delete("/deleteOne/:id", findByIdAndDeleteOne);
route.patch("/updateReview", findOneAndUpdate);
module.exports = route;
