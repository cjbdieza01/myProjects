const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

// Define the registration route
userRouter.post('/register', userController.registerUser);
userRouter.post('/login', userController.loginUser);

module.exports = userRouter;
