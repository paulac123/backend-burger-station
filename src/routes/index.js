const express = require("express");
const router = express.Router();

const productsRoutes = require("./menuRoutes");
//const orderDetail = require("./orderDetailRoutes");
const addUser = require("./newUserRoutes");
const orders = require("./orderRoutes");
const login = require("./loginRoutes");

router.use("/", productsRoutes);
//router.use("/", orderDetail);
router.use("/", addUser);
router.use("/", orders);
router.use("/", login);

module.exports = router;
