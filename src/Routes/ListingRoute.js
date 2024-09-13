const express = require("express");
const {
  createListing,
  readListing,
} = require("../Controller/ListingController");
const authMiddleware = require("../Middleware/authMiddleware");
const route = express.Router();
// create a listing..
route.post("/listingDetail", createListing);
// read all listing..
route.get("/listingDetail", authMiddleware, readListing);

module.exports = route;
