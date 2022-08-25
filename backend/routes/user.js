const express = require("express");
const userRouter = express.Router();
const authentication = require("../middleware/authentication");
const { createUser, updateUser } = require("../controllers/user");
const { login } = require("../controllers/login");
userRouter.post("/", createUser);
userRouter.post("/login", login);
userRouter.put("/", authentication, updateUser);

module.exports = userRouter;
