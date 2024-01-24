const fs = require('fs');
const path = require('path');
const usersPath = path.join(__dirname, 'users.json'); // Relative path to users.json in the same folder
const clientModel = require('../models/client-model');

// Define a function to register a new user
function registerUser(firstName, lastName, email, mobile, address, password) {
    // Add your validation logic here (e.g., check if email is unique)

    try {
        const usersData = JSON.parse(fs.readFileSync(usersPath));

        // Create a new user object
        const newUser = {
            id: clientModel.generateRandomId(), // You can define this function to generate unique user IDs
            firstName,
            lastName,
            email,
            mobile,
            address,
            password, // Remember to hash the password for security
        };

        // Add the new user to the usersData array
        usersData.users.push(newUser);

        // Write the updated data back to the JSON file
        fs.writeFileSync(usersPath, JSON.stringify(usersData, null, 2));

        return { status: true, message: 'User registered successfully' };
    } catch (error) {
        console.error('Error in registerUser:', error);
        return { status: false, message: 'Server Error' };
    }
}

function loginUser(email, password) {
    try {
        const usersData = JSON.parse(fs.readFileSync(usersPath));

        // Find the user with the given email
        const user = usersData.users.find((u) => u.email === email);

        if (!user) {
            return { status: false, message: 'User not found' };
        }

        if (user.password !== password) {
            return { status: false, message: 'Invalid password' };
        }

        // You can return the user data or a user token here for authentication
        return { status: true, message: 'Login successful', user };
    } catch (error) {
        console.error('Error in loginUser:', error);
        return { status: false, message: 'Server Error' };
    }
}

module.exports = {
    registerUser,
    loginUser,
};
