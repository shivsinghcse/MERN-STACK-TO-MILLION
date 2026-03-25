const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    brand: {
        type: String,
        default: "Generic",
        trim: true,
        lowercase: true
    },
    status: {
        type: String,
        lowercase: true,
        default: 'draft',
        enum: ['draft', 'published']
    }
}, {timestamps: true})

const ProductModel = model("Product", productSchema)

module.exports = ProductModel