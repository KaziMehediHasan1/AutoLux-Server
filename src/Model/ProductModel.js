const mongoose = require("mongoose");
const ProductModel = new mongoose.Schema({
  authorData: {
    authorMail: {
      type: String,
      required: true,
      trim: true,
    },
    authorName: {
      type: String,
      required: true,
      trim: true,
    },
    authorPhoto: {
      type: String,
      required: true,
    },
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String || Number,
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
  tag: {
    type: [String],
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductModel);
