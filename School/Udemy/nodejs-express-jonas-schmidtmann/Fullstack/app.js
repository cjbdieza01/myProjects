const express = require('express');

const app = express();
const PORT = 3000;

app.get('/api/v1/tours', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`)
});