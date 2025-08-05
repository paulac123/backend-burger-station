const express = require("express");
const router = express.Router();
const addUser = require("../controller/addUserController");
const { createUserSchema } = require("../schema/userSchema");
const validatorHandler = require("../middleware/validator.handler");

router.post("/user", validatorHandler(createUserSchema, "body"), addUser);

module.exports = router;
