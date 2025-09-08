const mongo = require("mongodb").MongoClient;
let db = null;
mongo.connect("mongodb://127.0.0.1:27017")
.then((client) => {
    db = client.db("wapdb");
})
.catch((err) => {
    console.log("Failed to connect with database.")
    console.error(err.message);
    process.exit(0);
})

const express = require("express");
const app = express();
app.listen(8080);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/product",  (req, res) => {
   res.status(200).json({message: "Post request."});
})

app.post("/product", async (req, res) => { 
   const payload = req.body;
   const Product = db.collection("products");
   await Product.insertOne(payload)
   res.status(200).json(payload);
})

app.put("/product", (req, res) => {
    res.status(200).json({message: "Put request."});
})

app.delete("/product", (req, res) => {
    res.status(200).json({message: "Delete request."});
})