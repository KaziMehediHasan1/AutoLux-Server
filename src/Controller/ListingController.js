const ListingDetail = require("../Model/ListingModel");
// create a listing..
createListing = async (req, res) => {
  const ListData = req.body;
  try {
    const newListing = new ListingDetail({ ...ListData });
    const savedListing = await newListing.save();
    // console.log(savedListing);
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
// pagination and filtering
paginationAndFiltering = async (req, res) => {
  try {
    const condition = req.query.condition;
    const make = req.query.make;
    const model = req.query.model;
    const price = req.query.price;
    let filter = {};
    if (condition) filter.condition = condition;
    if (make) filter.make = make;
    if (model) filter.model = model;
    if (price) filter.price = { $lte: price };
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const skip = (page - 1) * limit;
    const listing = await ListingDetail.find(filter).limit(limit).skip(skip);
    const totalListingsLength = await ListingDetail.estimatedDocumentCount(
      filter
    );
    const totalPages = Math.ceil(totalListingsLength / limit);
    // console.log(totalPages);
    res.status(200).json({
      listing,
      totalListingsLength,
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

DashBoardListingDeleteById = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id,"checking for ids");
    const deletedListingCar = await ListingDetail.findByIdAndDelete(id);
    if (deletedListingCar) {
      res.status(200).json(deletedListingCar);
    } else {
      res.status(404).json({ message: "Listing Car is not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

DashBardListingGet = async (req, res) => {
  try {
    const limit = req.query.limit || 5;
    const page = req.query.page || 1;
    // console.log(page,limit);
    const skip = (page - 1) * limit;
    const myListing = await ListingDetail.find().limit(limit).skip(skip);
    const carDataLength = await ListingDetail.estimatedDocumentCount();
    const totalPage = Math.ceil(carDataLength / limit);
    res.status(200).json({
      myListing,
      totalPage,
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createListing,
  readListing,
  paginationAndFiltering,
  DashBoardListingDeleteById,
  DashBardListingGet,

};
