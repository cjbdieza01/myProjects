const http = require('http');
const app = require('./app');
const PORT = 3000;


async function startServer() {
    app.listen(PORT, () => {
        console.log(`Server is listening to http://localhost:${PORT}`);
    });
}

startServer();
