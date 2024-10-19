const mongoose = require("mongoose");
const PaymentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  date: { type: String, default: Date.now },
  cartId: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("payment", PaymentSchema);
