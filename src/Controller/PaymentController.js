const PaymentSchema = require("../Model/PaymentModel");
const CartSchema = require("../Model/CartModel");
const mongoose = require("mongoose");
// create payment..
paymentData = async (req, res) => {
  try {
    const data = req.body;
    console.log(data, "Incoming payment data"); // Log the payment data

    const insertData = new PaymentSchema({ ...data });
    const saveProduct = await insertData.save();

    // Delete items from the cart
    const filter = {
      productId: {
        $in: data.cartId.map((id) => new mongoose.Types.ObjectId(id)),
      },
    };

    const deleteCartData = await CartSchema.deleteMany(filter);
    console.log(deleteCartData, "Delete operation result");

    res.status(200).json({ saveProduct, deleteCartData });
  } catch (error) {
    console.error(error); // Log any errors
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  paymentData,
};
