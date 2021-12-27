// dependencies
const http = require('http');

// data
const products = require('./data/products.json');

// server object...what does the server do when it receives a request
const server = http.createServer((request, response) => {
    // is the request a GET or a POST
    switch(request.method)  
    {
        default: // not a GET or a POST
            response.writeHead(404, {'Content-Type': 'application/json'});
            response.end(JSON.stringify({ 'message': 'Pack Sand!' }));
            break;

        case 'GET':
            switch (request.url) {
                default:
                    response.writeHead(404, {'Content-Type': 'application/json'});
                    response.end(JSON.stringify({ 'message': 'Pack Sand!' }));
                    break;

                case '/products/api':
                    response.writeHead(200, {'Content-Type': 'application/json'});
                    response.end(JSON.stringify(products));
                    break;
            }
            break;
        
        case 'POST':
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify( {'message': 'WIP!!!'} ));
            break;
    }
});

// use process.env.port or port 5000
const PORT = process.env.PORT || 5000;

// star the server, listen for a response
server.listen(PORT, () => {
    console.log(`SERVER is running on port ${PORT}`);
});