const users = require("../Schema/UserSchema");
const express = require("express");
const route = express.Router();

// create users..
route.post("/user", async (req, res) => {
  const { FirstName, LastName, Email, Photo, Password } = req.body;
  // console.log(req.body, "8no line");
  try {
    const newUser = new users({
      FirstName,
      LastName,
      Email,
      Photo,
      Password,
    });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

module.exports = route;
