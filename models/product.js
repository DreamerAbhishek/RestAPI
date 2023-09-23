const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  product_type: {
    type: String,
    required: true,
  },
  gate_type: { type: String, required: true },
  image: {
    type: String,
    required: true,
  },
  skuID: {
    type: Number,
    default: () => Math.floor(Math.random() * 10000),
  },
});

module.exports = mongoose.model("Product", productSchema);
