const express = require("express");
const mongoose = require ("mongoose");
const cors = require("cors");



const userRoutes = require("./Routes/userRoutes");
const productRoutes = require("./Routes/productRoutes");
const app = express();

mongoose.connect('mongodb+srv://cjbdieza03:0921506497aA@cjbdieza03.mnbktey.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



let db = mongoose.connection
db.on('error', console.error.bind(console,"MongoDB Conection error"));
db.once('open', () => console.log("Database is ready. ."));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.options('*');
app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(process.env.PORT || 8080, ()=> {
    console.log(`API is now online on port || 8080}`)
})