// const fs = require('fs');

// Blocking, synchronous way
// const textIn = fs.readFileSync('txt/input.txt', 'utf8');
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written');

// fs.readFile('./txt/start.txt', 'utf8', (err, data1) => {
//     fs.readFile('./txt/start.txt', 'utf8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('.txt/append.txt', 'utf8', (err, data3) => {
//             console.log(data3);
//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`,'utf8', err => {
//                 console.log('Your file has been writen')
//             })
//         })
//     });
// });

// console.log('Will read file');

// STARTING A SERVER
const fs = require('fs');
const PORT = 8080;
const localhostIp = '127.0.0.1';
const http = require('http');
const url = require('url');
replaceTemplate = require('./modules/replaceTemplate');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf8');
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf8');
const dataObj = JSON.parse(data);
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf8');

const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);

    // Overview Page
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
        const cardsHtml = dataObj.map((el) => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        res.end(output);

        // Product Page
    } else if (pathname === '/product') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
        console.log(query);
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);
        res.end(output);

        // API
    } else if (pathname === '/api') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        });
        res.end(data);
        // Not Found
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(PORT, localhostIp, () => {
    console.log(`Listening to request on port ${PORT}`);
});
