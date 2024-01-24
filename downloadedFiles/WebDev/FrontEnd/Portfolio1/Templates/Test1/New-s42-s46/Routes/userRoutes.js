const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
const auth = require("../auth");


//Register
router.post("/register", (req, res) => {
    userController.registerUser(req.body).then(resultFromController => res.send(resultFromController));
});

// Log-in
router.post("/login", (req, res) => {
    userController.loginUser(req.body).then(resultFromController => res.send(resultFromController));
});

// Retrieving all the products
router.get('/all', (req, res) => {
    productController.getAllProducts().then(resultFromController => res.send(resultFromController));
})

// Place an order
// router.post('/order', (req, res) => {
//     let data = {
//         userId: req.body.userId,
//         productId: req.body.productId,
//     };
//     userController.order(data)
//     .then(resultFromController => res.send(resultFromController))
//     .catch(error => res.status(500).send("Error"));
// });
router.post('/order', userController.createOrder);
module.exports = router;