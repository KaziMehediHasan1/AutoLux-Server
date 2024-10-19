const SubscriptionPlan = require("./models/SubscriptionPlan");

getMemberShipCard = async (req, res) => {
  try {
    const getSub = await SubscriptionPlan.find();
    res.status(200).json(getSub);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {getMemberShipCard};
