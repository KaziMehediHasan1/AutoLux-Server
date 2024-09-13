const express = require("express");
const ConnectDB = require("../Config/db");
require("dotenv").config();
const app = express();
const jwt = require("jsonwebtoken");
const morgan = require("morgan");
const cors = require("cors");
const userRoutes = require("../src/Routes/UserRoute");
const listingDetailRoute = require("../src/Routes/ListingRoute");
// connect to mongodb
ConnectDB();

// middleware..
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// jwt token post..
// app.post("/jwt", async (req, res) => {
//   const {email} = req.body;
//   console.log(email, "get user mail in jwt post req.");
//   try {
//     const user = await User.findOne({  email });
//     console.log('find user..25');
//     if (!user) {
//       return res.status(404).json({ message: "user not found" });
//     }
//     const token = jwt.sign(user, process.env.JWT_SECRET_TOKEN, {
//       expiresIn: "1h",
//     });
//     res.json({ token });
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).json({ message: "Server error" });
//   }
// });
app.post("/jwt", async (req, res) => {
  const user = req.body;
  // console.log("user for token", user);
  const token = jwt.sign(user, process.env.JWT_SECRET_TOKEN, {
    expiresIn: "1h",
  });
  // console.log('get token from jwt', token);
  res.json({ token });
});
// Routes.
app.use("/", userRoutes);
app.use("/",listingDetailRoute);

module.exports = app;
