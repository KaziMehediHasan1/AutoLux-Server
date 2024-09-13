const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
    // required: true,
    // minlength: [8, "The length of user password can be minimum 6 characters"],
  },
});

UserSchema.pre("save", async function (next) {
  try {
    if (this.isModified("Password") || this.isNew) {
      const salt = await bcrypt.genSalt(10);
      this.Password = await bcrypt.hash(this.Password, salt);
    }
    next();
  } catch (err) {
    console.log({ message: err.message });
    next(err);
  }
});

module.exports = mongoose.model("User", UserSchema);
