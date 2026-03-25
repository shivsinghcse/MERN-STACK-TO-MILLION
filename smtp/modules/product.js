let db = null
const {ObjectId} = require('mongodb')
const mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017')

.then((client) => {
    console.log("DB connected");
    db = client.db('xyz')
})

.catch((err) => {
    console.log("DB connection failed: " + err.message);
    process.exit(1)
})


const createProduct = async (req, res) => {
    const Product = db.collection('products')
    const payload = req.body
    await Product.insertOne(payload)
    res.status(200).json(payload)
}

const fetchProducts = async (req, res) => {
    const Product = db.collection('products')
    const products = await Product.find().toArray()
    res.status(200).json(products)
}  

const updateProduct = async (req, res) => {
    const { id } = req.params
    const Product = db.collection('products')
    const payload = req.body
    await Product.updateOne({_id: new ObjectId(id)}, {$set: payload})
    res.status(200).json(payload)
    console.log(id);
    res.send("xxx")
}

const deleteProduct = async (req, res) => {
    const { id } = req.params
    const Product = db.collection('products')
    await Product.deleteOne({_id: new ObjectId(id)})
    res.status(200).json({message: 'user deleted'})
}

module.exports = {
    createProduct,
    fetchProducts,
    updateProduct,
    deleteProduct
}
