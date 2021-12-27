// data
const products = require('../data/products.json');

// find all products
function findAll () {
    // using async/await so create a promise
    return new Promise((resolve, reject) => {
        resolve(products);
    });
};

// expose functions
module.exports = {
    findAll
}