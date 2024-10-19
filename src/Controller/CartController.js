const CartModel = require("../Model/CartModel");
// create a cart data..
postProductDataInCart = async (req, res) => {
  const data = req.body;
  try {
    const saveData = new CartModel({ ...data });
    const saveCartData = await saveData.save();
    res.status(200).json(saveCartData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
getCartData = async (req, res) => {
  try {
    const getData = await CartModel.find();
    res.status(200).json(getData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// findOneByIdAndDeleteOne..
cartDataDelete = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const deletedListingCar = await CartModel.findOneAndDelete({
      productId: id,
    });
    if (deletedListingCar) {
      res.status(200).json(deletedListingCar);
    } else {
      res.status(404).json({ message: "Listing Car is not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// findByMail and delete existing all data..
findByMailAndDelete = async (req, res) => {
  try {
    // const mail = req.query.user;
    // console.log(mail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  postProductDataInCart,
  getCartData,
  cartDataDelete,
  findByMailAndDelete,
};
