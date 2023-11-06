const userModel = require('../models/userModel');

function registerUser(request, response) {
    const { firstName, lastName, email, mobile, address, password } = request.body;
    const registrationResult = userModel.registerUser(firstName, lastName, email, mobile, address, password);

    if (registrationResult.status) {
        response.status(200).json({ status: true, message: 'User registered successfully' });
    } else {
        response.status(400).json({ status: false, message: registrationResult.message });
    }
}

function loginUser(request, response) {
    const { email, password } = request.body;
    const loginResult = userModel.loginUser(email, password);

    if (loginResult.status) {
        response.status(200).json({ status: true, message: 'Login successful', user: loginResult.user });
    } else {
        response.status(401).json({ status: false, message: loginResult.message });
    }
}

module.exports = {
    registerUser,
    loginUser,
};