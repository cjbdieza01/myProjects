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
const replaceTemplate = require('./modules/replaceTemplate')
const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true); 
    // console.log(url);
    if (pathname === "/hello") {
        res.end("SERVER")
        console.log(tempCard)
    } 
    // Overview Page
    else if (pathname === "/overview" || pathname === "/") {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'My-Header' : 'Hello Pre'
        })
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join();
        const output = tempOverview.replace('@PRODUCT_CARDS@', cardsHtml);
        res.end(output);

    } else if (pathname === '/product') {
        res.writeHead(200, {
            "Content-Type": 'text/html'
        });
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);
        // console.log(url);
        // console.log(req.url);
        // console.log(query);
        // console.log(pathname);
        // console.log(query);
        res.end(output);
    }
    
    else {
    res.writeHead(404, {
      'Content-Type': 'text/html',
      'my-own-header': 'hello-world'
    });
        const HTMLtext = `<h1>Page not found!</h1>`
    res.end(HTMLtext);
  }

})


server.listen(PORT, HOST, () => {
    console.log(`The server is running on PORT: ${PORT}`)
});
