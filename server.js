const http = require('http');
const products = require('./data/products.json');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.write(JSON.stringify(products))
    response.end();
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {console.log(`SERVER is running on port ${PORT}`)});