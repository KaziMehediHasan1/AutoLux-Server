const express = require("express");
const {
  createListing,
  readListing,
  paginationAndFiltering,
  DashBoardListingDeleteById,
  DashBardListingGet,
} = require("../Controller/ListingController");
// const authMiddleware = require("../Middleware/authMiddleware");
const route = express.Router();
// crud operation..
route.post("/listingDetail", createListing);
route.get("/listingDetail", readListing);
route.get("/listing-page", paginationAndFiltering);
route.delete("/DashListing/:id", DashBoardListingDeleteById);
route.get("/myListing", DashBardListingGet);

module.exports = route;
