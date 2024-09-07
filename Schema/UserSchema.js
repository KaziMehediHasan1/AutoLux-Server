const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Photo: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
    minlength: [8, "The length of user password can be minimum 6 characters"],
  },
});

module.exports = mongoose.model("User", UserSchema);
