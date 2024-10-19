const mongoose = require("mongoose");

const ListingDetail = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },

  label: {
    type: String,
  },
  condition: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  offer: {
    type: String,
  },
  drive: {
    type: String,
  },
  transmission: {
    type: String,
  },
  fuel: {
    type: String,
  },
  mileage: {
    type: String,
    required: true,
  },
  engine: {
    type: String,
    required: true,
  },
  cylinder: {
    type: String,
  },
  color: {
    type: String,
  },
  door: {
    type: String,
    // enum: [2, 3, 4, 5, 6],
  },
  vin: {
    type: String,
    // required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  carFeature: {
    type: [String],
    required: true,
  },
  carImage: {
    type: [String],
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

// Export the model
module.exports = mongoose.model("ListingDetail", ListingDetail);
