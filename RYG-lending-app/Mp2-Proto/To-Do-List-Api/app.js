const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/addTask') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        })

        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                const { task, taskDate } = data;

                if ( !task || !taskDate ) {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: false, message: 'All fields are required'}));
                } else {
                    fs.readFile('data-task.json', 'utf8', (error, data) => {
                        if (error) {
                            console.error('Error reading file: ', error);
                            res.writeHead(500, { 'Content-Type': 'application/json' });
                            res.end(JSON.stringify({ status: false, message: 'Internal Server Error'}));
                            return;
                        }

                        const tasks = JSON.parse(data).tasks;
                        const taskObj = {task, taskDate};
                        tasks.push(taskObj);

                        fs.writeFile('data-task.json', JSON.stringify({tasks}), 'utf8', (error) => {
                            if (error) {
                                console.error('Error reading file: ', error);
                                res.writeHead(500, { 'Content-Type': 'application/json' });
                                res.end(JSON.stringify({ status: false, message: 'Internal Server Error'}));
                                return;
                            } else {
                                res.writeHead(200, { 'Content-Type': 'application/json' });
                                res.end(JSON.stringify({ status: true, message: 'Task added successfully'}));
                            }
                        });
                    });
                }
            } catch(error) {
                console.error('Error parsing file: ', error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: false, message: 'Invalid Format'}));
            }
        });
    } else if (req.method === 'GET' && req.url === '/getAllTasks') {
            fs.readFile('data-task.json', 'utf8', (error, data) => {
                if (error) {
                    console.error('Error reading file: ', error);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: false, message: 'Internal Server Error'}));
                    return;
                }
    
                const tasks = JSON.parse(data).tasks;
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(tasks));
            });
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
    