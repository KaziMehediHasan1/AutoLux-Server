const express = require("express");
const {
  Bookmarked,
  getBookmarked,
} = require("../Controller/BookmarkListingController");
const route = express.Router();

// curd operation..
route.put("/bookmark/:id", Bookmarked);
route.get("/bookmarked", getBookmarked);
module.exports = route;
