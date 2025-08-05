const express = require("express");
const router = express.Router();
const {
  getAllMenu,
  getByCategory,
} = require("../controller/productController");
//const addProductToOrder = require("../controller/orderDetailController");

router.get("/menu", getAllMenu);

router.get("/menu/:id", getByCategory);

//router.post("/orderDetail", addProductToOrder);

module.exports = router;
