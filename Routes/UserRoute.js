const express = require("express");
const { GetUsers, CreateUser } = require("../Controller/UserController");

const router = express.Router();

router.get("/users", GetUsers);
router.post("/users", CreateUser);

module.exports = router;
