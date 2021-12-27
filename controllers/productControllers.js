// controller dependencies
const Product = require('../models/productModel')

// return the full list of products
async function getProducts(request, response) {
    try {
        // promise created in productModels.js...here we wait for it
        const products = await Product.findAll();

        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(products));
    } catch (error) {
        console.error(error);
    }
};

// expose functions
module.exports = {
    getProducts
}