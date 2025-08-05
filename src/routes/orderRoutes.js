const express = require("express");
const createOrder = require("../controller/orderController");
const router = express.Router();
const authHeader = require("../middleware/auth.handler");

router.post("/orders", authHeader, createOrder);

module.exports = router;
