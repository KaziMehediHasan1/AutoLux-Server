const carListing = require("../Routers/AddListingRoute");
const express = require("express");
const route = express.Router();
// create a listing..
route.post("/listingDetails", async (req, res) => {
  const ListData = req.body;
  console.log(ListData, '7 no line');
  try {
    const newListing = new carListing({
      ListData,
    });
    const savedListing = await newListing.save();
    res.status(200).json(savedListing);
  } catch (err) {
    res.status(500).json({ error: "Failed to create Listing" });
  }
});
module.exports = route;
