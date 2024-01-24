const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors(
    {
    origin: 'http://127.0.0.1:5500'
    } 
));

app.use(express.json());

app.use('/clients', require('./routers/client.router'));
app.use('/users', require('./routers/userRouter'));

module.exports = app;