const express = require("express");
const { readUsers, createUsers } = require("../Controller/UserController");
const route = express.Router();

// create users..
route.post("/user", createUsers);
// read users..
route.get("/users", readUsers);

module.exports = route;
