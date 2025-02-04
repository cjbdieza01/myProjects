const express = require('express');
// config = require('./server/configure');
let app = express();

app.set('port', process.env.PORT || 3300);
// app.set('Views', `${__dirname/Views}`);
// app = config(app);

app.get('/', (req, res) => {
    res.send('Hello From Server Side');
});
app.listen(app.get('port'), () => {
    console.log(`Server Up: 
    http://localhost:${app.get('port')}`);
});