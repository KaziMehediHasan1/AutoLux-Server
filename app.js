const express = require("express");
const ConnectDB = require("./Config/db");
const userRoutes = require("./Routers/UserRouter");
const morgan = require("morgan");
const cors = require("cors");
const addListing = require("./Routers/AddListingRoute");
require("dotenv").config();
const app = express();

// connect to mongodb
ConnectDB();

// middleware..
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Routes.
app.use("/", userRoutes);
app.use("/", addListing);
module.exports = app;
