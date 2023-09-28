require("dotenv").config();

const express = require("express");
const app = express();
const cors = require('cors');
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 3000;
const products_routes = require("./routes/products");

app.use(cors());

app.get("/", (req, res) => {
  res.send("that I'm live Now");
});

//middleware or routing
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT,"0.0.0.0",() => {
      console.log(`${PORT} Yes I am connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
