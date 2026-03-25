const ProductModel = require('../model/product.model')

const createProduct = async (req, res) => {
    try
    {
        const product = await ProductModel.create(req.body)
        res.status(200).json(product)
    }
    catch(err)
    {
        res.status(500).json({message: err.message})
    }
}

const fetchProducts = async (req, res) => {
    try
    {
        const products = await ProductModel.find().sort({createdAt: -1})
        res.status(200).json(products)
    }
    catch(err)
    {
        res.status(500).json({message: err.message})
    }
}

const updateProduct = async (req, res) => {
    try
    {
        const { id } = req.params
        const product = await ProductModel.findByIdAndUpdate(id, req.body, {new: true})
        if(!product)
        {
           return res.status(404).json({message: 'product not found'})
        }
        res.status(200).json(product)
    }
    catch(err)
    {
        res.status(500).json({message: err.message})
    }
}

const deleteProduct = async (req, res) => {
    try
    {
        const {id} = req.params
        const product = await ProductModel.findByIdAndDelete(id)
        if(!product)
        {
           return res.status(404).json({message: 'product not found'})
        }
        res.status(200).json(product)
    }
    catch(err)
    {
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    createProduct,
    fetchProducts,
    updateProduct,
    deleteProduct
}