const users = require("../Controller/UserController");
const createUsers = async (req, res) => {
  const { FirstName, LastName, Email, Photo, Password } = req.body;
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
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

const readUsers = async (req, res) => {
  try {
    const getUsers = await users.find();
    res.status(200).json(getUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createUsers, readUsers };
