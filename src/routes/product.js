const express = require("express");
const router = express.Router();
const { getProducts, getProductById, createProduct, deleteProduct, updateProduct } = require("../controllers/product.controller");
//const verifyToken = require("../middlewares/jwt.middleware");

router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;
