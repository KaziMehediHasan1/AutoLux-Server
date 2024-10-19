const mongoose = require("mongoose");
const bookmarkedSchema = new mongoose.Schema(
  {
    person: {
      type: String,
      required: true, //user email..
    },
    listingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ListingDetail",
      required: true, // ID of the listing being bookmarked
    },
    isBookmarked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Bookmark = mongoose.model("Bookmark", bookmarkedSchema);
module.exports = Bookmark;
