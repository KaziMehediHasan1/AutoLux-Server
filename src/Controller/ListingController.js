const ListingDetail = require("../Model/ListingModel");
// create a listing..
createListing = async (req, res) => {
  const ListData = req.body;
  // console.log(ListData, "7no line data");
  try {
    const newListing = new ListingDetail({ ...ListData });
    const savedListing = await newListing.save();
    res.status(200).json(savedListing);
  } catch (err) {
    res.status(500).json({ error: "Failed to create Listing" });
  }
};
// read listing..
readListing = async (req, res) => {
  try {
    const getListing = await ListingDetail.find();
    res.status(200).json(getListing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { createListing, readListing };
