const mongoose = require("mongoose");
const MailModel = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    mail: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Mail", MailModel);
