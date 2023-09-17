const Product = require("../models/product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    console.log(error, "ERROR");
  }
};

const getBetaProducts = async (req, res) => {
  res.status(200).json({ msg: "Get Beta Products Live Soon" });
};

module.exports = { getProducts, getBetaProducts };
