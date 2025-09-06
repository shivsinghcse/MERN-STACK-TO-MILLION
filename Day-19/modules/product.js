const { type, getMessage } = require("./common");

const createProduct = async (req, res, productCollection) => {
    const payload = {
        name: "shooes for men"
    }
    await productCollection.insertOne(payload)
    res.writeHead(200, type);
    res.end(JSON.stringify(payload));
    return;
}

const fetchProduct = (req, res, productCollection) => {
    const message = getMessage("Product fetched.");
    res.writeHead(200, type);
    res.end(message);
    return;
}

const updateProduct = (req, res, productCollection) => {
    const message = getMessage("Product updated.");
    res.writeHead(200, type);
    res.end(message);
    return;
}

const deleteProduct = (req, res, productCollection) => {
    const message = getMessage("Product deleted.");
    res.writeHead(200, type);
    res.end(message);
    return;
}

module.exports = {
    createProduct,
    fetchProduct,
    deleteProduct,
    updateProduct
}