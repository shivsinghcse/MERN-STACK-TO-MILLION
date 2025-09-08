const {ObjectId} = require("mongodb");

const mongo = require("mongodb").MongoClient;
let db = null;
mongo.connect("mongodb://127.0.0.1:27017")
.then((client) => {
    db = client.db("wapdb");
})
.catch((err) => {
    console.log("Failed to connect with database.")
    console.error(err.message);
    process.exit(1);
})




const createProduct = async (req, res) => {
    const Product = db.collection("products");
    const payload = req.body;
    await Product.insertOne(payload);
    res.status(200).json(payload);
}

const fetchProduct = async (req, res) => {
    const Product = db.collection("products");
    const products = await Product.find().toArray();
    res.status(200).json(products);
}

const updateProduct = async (req, res) => {
    const Product = db.collection("products");
    const {id} = req.params;
    const payload = req.body;
    await Product.updateOne({_id: new ObjectId(id)}, {$set: payload})
    res.status(200).json(payload);
}

const deleteProduct = async (req, res) => {
    const Product = db.collection("products");
    const {id} = req.params;
    await Product.deleteOne({_id: new ObjectId(id)})
    res.status(200).json({message: "Product Deleted"})
}


module.exports = {
    createProduct,
    fetchProduct,
    updateProduct,
    deleteProduct
}