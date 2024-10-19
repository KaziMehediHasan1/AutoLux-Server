const mailModel = require("../Model/EmailModel");
const createMailData = async (req, res) => {
  const data = req.body;
  console.log("4", data);
  try {
    const create = new mailModel({ ...data });
    const savedMail = await create.save();
    res.status(200).json(savedMail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { createMailData };
