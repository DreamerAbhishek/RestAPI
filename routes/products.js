const express = require("express");

const router = express.Router();

const { getProducts, getBetaProducts } = require("../controllers/products");

router.route("/").get(getProducts);
router.route("/beta").get(getBetaProducts);

module.exports = router;
