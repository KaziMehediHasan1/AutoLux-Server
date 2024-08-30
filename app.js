const express = require("express");
const ConnectDB = require("./Config/db");
const userRoutes = require("./Routes/UserRoute");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

// connect to mongodb
ConnectDB();

// middleware..
app.use(express.json());
app.use(morgan("dev"));

// Routes.
app.use("/users", userRoutes);
module.exports = app;
