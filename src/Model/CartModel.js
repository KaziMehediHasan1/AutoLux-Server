const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
