const express = require("express");
const createOrder = require("../controller/orderController");
const router = express.Router();
const authHeader = require("../middleware/auth.handler");

router.post("/orders", authHeader, createOrder); //aca meter el validador de shema de orders

module.exports = router;
