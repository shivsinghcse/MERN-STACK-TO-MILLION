

const express = require("express");
const { createProduct, fetchProduct, updateProduct, deleteProduct } = require("./modules/product")
const app = express();
app.listen(8080);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/product",  fetchProduct)

app.post("/product", createProduct)

app.put("/product/:id", updateProduct)

app.delete("/product/:id", deleteProduct)