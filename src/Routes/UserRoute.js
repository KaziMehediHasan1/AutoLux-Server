const express = require("express");
const { readUsers, createUsers } = require("../Controller/UserController");
const route = express.Router();

route.post("/user", createUsers);
route.get("/users", readUsers);

module.exports = route;
