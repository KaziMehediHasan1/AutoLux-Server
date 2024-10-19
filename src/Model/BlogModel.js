const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
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
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: [String],
      required: true,
    },
    viewCount: {
      type: Number,
      default: 0, // Initialize viewCount to 0 by default
    },
  },
  {
    timestamps: true, // This adds `createdAt` and `updatedAt` fields
  }
);

module.exports = mongoose.model("Blog", BlogSchema);
