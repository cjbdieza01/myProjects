const Archive = require("../Models/Archives");
const Product = require("../Models/Product");
const User = require('../Models/User')
const auth = require("../auth");



module.exports.addProduct = (data) => {
    let isActive = Math.random() < 0.5;
    let newProduct = new Product({
        name : data.product.name,
        description : data.product.description,
        price : data.product.price,
        isActive: isActive
    });
    return newProduct.save().then((product, error) => {
        if(error) {
            return false;
        } else {
            return true;
        };
    })
};

module.exports.getAllProducts = () => {
    return Product.find({}).then(result => {
        return result;
    });
};

module.exports.getAllActive = () => {
    return Product.find({isActive : true}).then(result => {
        return result;
    })
}

module.exports.getProduct = (reqParams) => {
    return Product.findById(reqParams.productId);
};

module.exports.updateProduct = (reqParams, reqBody) => {
    let updatedProduct = {
        name: reqBody.name,
        description: reqBody.description,
        price: reqBody.price
    };

    return Product.findByIdAndUpdate(reqParams.productId, updatedProduct, { new: true })
        .then((product) => {
            return (product);
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
};

// Archive a product
module.exports.archiveProduct = (reqParams) => {
    const productId = reqParams.productId;
  
    return Product.findByIdAndRemove(productId)
      .then((archivedProduct) => {
        if (!archivedProduct) {
          return false;
        }
  
        const archiveData = {
          name: archivedProduct.name,
          description: archivedProduct.description,
          price: archivedProduct.price
        };
  
        const archivedItem = new Archive(archiveData);
        return archivedItem.save();
      })
      .then((archivedItem) => {
        if (archivedItem) {
          return true;
        } else {
          return false;
        }
      });
  };
  
// Retrieve Archived Products
module.exports.getAllArchived = async (req, res) => {
    try {
      const archives = await Archive.find();
      res.json(archives);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };



