const ProductSchema = require("../Model/ProductModel");
// create data..
const createProduct = async (req, res) => {
  try {
    const productData = req.body;
    const productAdd = new ProductSchema({ ...productData });
    const saveProduct = await productAdd.save();
    res.status(200).json(saveProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const readProduct = async (req, res) => {
  try {
    const getProduct = await ProductSchema.find();
    res.status(200).json(getProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// pagination and filtering
const getProductPaginate = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const skip = (page - 1) * limit;
    const products = await ProductSchema.find().limit(limit).skip(skip);
    const totalProductsLength = await ProductSchema.estimatedDocumentCount();
    const totalPages = Math.ceil(totalProductsLength / limit);
    // console.log(totalPages);
    res.status(200).json({
      products,
      totalProductsLength,
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const dashBoardProductDeleteById = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id,"checking for ids");
    const deletedProduct = await ProductSchema.findByIdAndDelete(id);
    if (deletedProduct) {
      res.status(200).json(deletedProduct);
    } else {
      res.status(404).json({ message: "Product is not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  readProduct,
  getProductPaginate,
  dashBoardProductDeleteById,
};
