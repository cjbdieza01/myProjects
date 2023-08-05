const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email: {
        type : String,
        required : [true, "Email is required"]
    },
    password: {
        type : String,
        required : [true, "Password is required"]
    },
    isAdmin: {
        type : Boolean,
        require: true
    },
    orderedProducts: [
        {
            productId: {
                type : mongoose.Schema.Types.ObjectId,
                required : [true, "ProductId is required"]
            },
            productName: {
                type : String,
                required : true
            },
            quantity: {
                type : Number,
                required : true
            }
        }
    ]
})

module.exports = mongoose.model("User", userSchema);