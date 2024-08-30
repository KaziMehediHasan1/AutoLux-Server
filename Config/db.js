// config..
const mongoose = require("mongoose");
require("dotenv").config();

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_SERVER_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB Connection Error", error);
  }
};

module.exports = ConnectDB;
