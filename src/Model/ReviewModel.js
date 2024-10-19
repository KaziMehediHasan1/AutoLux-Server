const mongoose = require("mongoose");
const reviewModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    listId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("review", reviewModel);
