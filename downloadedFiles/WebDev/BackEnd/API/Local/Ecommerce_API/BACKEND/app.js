const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');


app.use(cors());
app.options('*')

require("dotenv/config");
const api = process.env.API_URL;





// Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));


// Routers
const categoriesRouter = require('./routers/categories');
const productsRouter = require(`./routers/products`);


app.use(`${api}/categories`, categoriesRouter);
app.use(`${api}/products`, productsRouter)

mongoose.connect(process.env.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(() => {
    console.log('Database connection is ready..')
})
.catch((err) => {
    console.log(err);
})


app.listen(3000, () => {
    console.log("The server is running http://localhost:3000");
});
