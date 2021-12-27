// dependencies
const http = require('http');

// deconstruct to only require what we need
const { getProducts} = require('./controllers/productControllers')

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
                default: // GET request but invalid URL
                    response.writeHead(404, {'Content-Type': 'application/json'});
                    response.end(JSON.stringify({ 'message': 'Information Not Found' }));
                    break;

                case '/products/api': // show the basic list of products
                    getProducts(request, response);
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