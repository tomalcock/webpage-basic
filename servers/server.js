const { createServer } = require('http');
const { readFile } = require('fs/promises');

const server = createServer((req,res) => {
    const { url, method } = req;

    if(url === "/api/food" && method === 'GET') {
        readFile('./food.json', 'utf-8')
        .then((file) => {
            const food = JSON.parse(file);
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify({food}));
            res.statusCode = 200;
            res.end();
        });
    } else {
        console.log('something is wrong');
    }
});

server.listen(9090)

module.exports = server;