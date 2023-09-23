require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");
const ProductJson = require("./products.json");
const fs = require("fs");

const start = async () => {
  try {
    const TotalProduct = [];
    await connectDB(process.env.MONGODB_URL);
    ProductJson.forEach((a, i) => {
      let imageBuffer = fs.readFileSync(a.image);
      let base64Image = imageBuffer.toString("base64");
      TotalProduct.push({
        name: a.name,
        material: a.material,
        product_type: a.product_type,
        gate_type: a.gate_type,
        image: base64Image,
      });
    });
    await Product.deleteMany();
    await Product.create(TotalProduct);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
