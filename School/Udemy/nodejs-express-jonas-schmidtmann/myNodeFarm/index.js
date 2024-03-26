const fs = require('fs');
const http = require('http');
const url = require('url');
const PORT = 8000;
const HOST = '127.0.0.1';

const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8')
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);



const server = http.createServer((req, res) => {
    const pathName = req.url;
    
    if (pathName === "/hello") {
        res.end("SERVER")
        console.log(tempCard)
    } 
    // Overview Page
    else if (pathName === "/overview" || pathName === "/") {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'My-Header' : 'Hello Pre'
        })
        res.end(tempOverview)
    }

})


server.listen(PORT, HOST, () => {
    console.log(`The server is running on PORT: ${PORT}`)
});
