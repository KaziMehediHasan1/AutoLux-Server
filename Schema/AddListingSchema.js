const mongoose = require("mongoose");

const carListingSchema = new mongoose.Schema({
  listingTitle: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    enum: ["Cars", "SUVs", "Trucks", "Motorcycles", "Vans"],
    required: true,
  },
  label: {
    type: String,
    enum: ["Featured", "Best Seller", "New Arrival", "Hot Deal", "Clearance"],
  },
  condition: {
    type: String,
    enum: ["New", "Used", "Certified Pre-Owned", "Salvage", "Rebuilt"],
    required: true,
  },
  type: {
    type: String,
    enum: ["Sedan", "Coupe", "Hatchback", "Convertible", "Wagon"],
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
    type: Number,
    required: true,
  },
  offerType: {
    type: String,
    enum: ["For Sale", "For Rent", "Lease", "Auction", "Trade-in"],
  },
  driveType: {
    type: String,
    enum: ["FWD", "RWD", "AWD", "4WD", "Part-Time 4WD"],
  },
  transmission: {
    type: String,
    enum: ["Automatic", "Manual", "Semi-Automatic", "CVT", "Dual-Clutch"],
  },
  fuelType: {
    type: String,
    enum: ["Gasoline", "Diesel", "Electric", "Hybrid", "LPG"],
  },
  mileage: {
    type: Number,
    required: true,
  },
  engineSize: {
    type: String,
    required: true,
  },
  cylinder: {
    type: Number,
  },
  color: {
    type: String,
  },
  door: {
    type: Number,
    enum: [2, 3, 4, 5, 6],
  },
  VIN: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

// Export the model
const CarListing = mongoose.model("CarListing", carListingSchema);
module.exports = CarListing;
