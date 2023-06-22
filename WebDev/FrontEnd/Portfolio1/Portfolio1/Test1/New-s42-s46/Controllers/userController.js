const User = require("../Models/User");
const Product = require('../Models/Product')
const bcrypt = require("bcrypt");
const auth = require("../auth")




module.exports.registerUser = (reqBody) => {
    let newUser = new User({
        email : reqBody.email,
        password : bcrypt.hashSync(reqBody.password, 10),
        isAdmin :false
    })
    return newUser.save().then((user, error) => {
        if (error) {
            return false;
        } else {
            return true;
        }
    })
}

module.exports.loginUser = (reqBody) => {
    return User.findOne({ email: reqBody.email }).then(result => {
      if (result == null) {
        return false;
      } else {
        const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password);
        if (isPasswordCorrect) {
          return { access: auth.createAccessToken(result) };
        } else {
          return "Invalid email or password!";
        }
      }
    });
  };
  
// Place an order
// module.exports.order = async (data) => {
//   let isUserUpdated = await User.findById(data.userId).then(user => {
//     user.orderedProducts.push({orderedProducts : data.orderedProducts});
//     return user.save().then ((user, error) => {
//       if (error) {
//         return false
//       } else {
//         return true;
//       }
//     })
//   })
//   let isProductUpdated = await Product.findById(data.productId).then (product => {
//     product.userOrders.push({userId : data.userId});
//     return product.save().then((product, error) => {
//       if (error) {
//         return false;
//       } else {
//         return true;
//       }
//     })
//   })
//   if(isUserUpdated && isProductUpdated) {
//     return true;
//   }else {
//     return false;
//   }
// }


module.exports.createOrder = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const user = await User.findById(userId);
    const product = await Product.findById(productId);

    if (!user || !product) {
      return res.status(404).send('User or product not found.');
    }

    const orderedProduct = {
      productId: product._id,
      productName: product.name,
      quantity: 1, // Adjust the quantity as needed
    };

    user.orderedProducts.push(orderedProduct);
    product.userOrders.push({ userId: user._id, orderId: 234234324 }); // Replace 'your-order-id' with an appropriate order ID

    await user.save();
    await product.save();

    return res.status(200).send('Order created successfully.');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error creating order.');
  }
};