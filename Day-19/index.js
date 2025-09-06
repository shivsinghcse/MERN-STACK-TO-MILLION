const mongo = require("mongodb").MongoClient;
const http = require('http');
const { type, getMessage } = require("./modules/common");
const { createProduct, fetchProduct, updateProduct, deleteProduct} = require("./modules/product");
let db = null;

mongo.connect("mongodb://127.0.0.1")


.then((client) => {
    db = client.db("myntra");
})

.catch((err) => {
    console.log(err.message);
})

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url !== "/product")
    {
        const message = getMessage("endpoint not found.");
        res.writeHead(404, type);
        res.end(message);
        return;
    }

    if(!db){
        const message = getMessage("Database not initialised!!")
        res.writeHead(500, type);
        res.end(message);
        return;
    }

    if( method !== "GET" && method !== "POST" && method !== "PUT" & method !== "DELETE")
    {
        const message = getMessage("Method not Found!!")
        res.writeHead(405, type);
        res.end(message);
        return;
    }

    const productCollection = db.collection("products");

    if(method === "GET") fetchProduct(req, res, productCollection)

    if(method === "POST") createProduct(req, res, productCollection)
    
    if(method === "PUT") updateProduct(req, res, productCollection)

    if(method === "DELETE") deleteProduct(req, res, productCollection)

});

server.listen(8080);

