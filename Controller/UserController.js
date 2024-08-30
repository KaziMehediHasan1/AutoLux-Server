const user = require("../Models/UserModel");

// get all users..
exports.GetUsers = async (req, res) => {
  try {
    const users = await user.find();
    // res.send('peyechi tmk ami')
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create user
exports.CreateUser = async (req, res) => {
  const { FirstName, Email, Password } = req.body;
  try {
    const newUser = await new User((FirstName, Email, Password));
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
