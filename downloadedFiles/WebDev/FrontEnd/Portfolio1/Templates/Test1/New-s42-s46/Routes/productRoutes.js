const express = require("express");
const router = express.Router();
const productController = require("../Controllers/productController")
const auth = require("../auth");


// Create Products
router.post("/", auth.verify, (req, res) => {
    const data = {
        product : req.body,
        isAdmin : auth.decode(req.headers.authorization).isAdmin
    }
    if(data.isAdmin == true) {
        productController.addProduct(data).then(resultFromController => res.send(resultFromController));
    } else {
        res.send(false);
    }
});

// Retrieves all active products
router.get("/allactive", (req, res) => {
    productController.getAllActive().then(resultFromController => res.send(resultFromController));
});


// Get all products
router.get('/', (req, res) => {
    productController.getAllProducts()
        .then(resultFromController => res.send(resultFromController))
        .catch(error => res.status(500).send(error));
});

// Get single product
router.get('/:productId', (req, res) => {
    console.log(req.params.productId);
    productController.getProduct(req.params)
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

// Route for updating product information - ADMIN
router.put('/:productId', auth.verify, (req, res) => {
    productController.updateProduct(req.params, req.body)
        .then((updatedProduct) => res.send(updatedProduct))
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error updating product');
        });
});

// Archive a product
router.put('/:productId/archive', auth.verify, (req, res) => {
    const data = {
      isAdmin: auth.decode(req.headers.authorization).isAdmin
    };
  
    if (data.isAdmin) {
      productController
        .archiveProduct(req.params)
        .then((resultFromController) => res.send(resultFromController))
        .catch((error) => {
          console.error(error);
          res.status(500).send('Error archiving product');
        });
    } else {
      res.send(false);
    }
  });

// GET /products/archived route
router.get('/archived', productController.getAllArchived);



  
  




module.exports = router;