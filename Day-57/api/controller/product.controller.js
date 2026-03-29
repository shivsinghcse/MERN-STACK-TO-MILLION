import { ProductModel }  from "../model/product.model.js"


export const createProduct = async (req, res) => {
    try
    {
        const payload = req.body
        const product = await ProductModel.create(payload)
        res.status(200).json(product)
    }
    catch(err)
    {
        res.status(500).json({message: err.message})
    }
}

export const fetchProducts = async (req, res) => {
    try
    {
        const products = await ProductModel.find()
        res.status(200).json(products) 
    }
    catch(err)
    {
        res.status(500).json({message: err.message})
    }
}

export const updateProduct = async (req, res) => {
    try
    {
        const { id } = req.params
        const payload = req.body
        
        const product = await ProductModel.findByIdAndUpdate(id, payload, {new: true})

        if(!product){
            return res.status(404).json({message: 'product does not exist'})
        }

        res.status(200).json(product)
    }
    catch(err)
    {
        res.status(500).json({message: err.message})
    }
}

export const deleteProduct = async (req, res) => {
    try
    {
        const { id } = req.params
        const product = await ProductModel.findByIdAndDelete(id)

        if(!product){
            return res.status(404).json({message: 'product does not exist'})
        }
        
        res.status(200).json(product)
    }
    catch(err)
    {
        res.status(500).json({message: err.message})
    }
}