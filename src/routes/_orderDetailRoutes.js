const express = require("express");
const router = express.Router();
const addProductToOrder = require("../controller/_orderDetailController");

router.post("/ordersDetail", addProductToOrder);

module.exports = router;
