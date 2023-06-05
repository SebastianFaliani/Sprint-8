const express = require("express");
const router = express.Router();
const { getUsers, getUserById, createUser, deleteUser, updateUser, login } = require("../controllers/user.controller");
const { userRegisterValidationRules } = require("../validations/registerUser.validator");
const validate = require("../validations/index.validator");
const userLoginValidationRules = require("../validations/loginUser.validator");

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/login", userLoginValidationRules(), validate, login);
router.post("/register", userRegisterValidationRules(), validate, createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
