const express = require("express");
const { createUsers, readUsers } = require("../Controller/UserController");
const route = express.Router();

// create users..
route.post("/user", createUsers);
// read users..
route.get("/user", readUsers);

module.exports = route;
