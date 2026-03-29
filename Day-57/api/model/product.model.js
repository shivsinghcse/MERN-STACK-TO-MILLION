import {Schema, model} from "mongoose";

const productSchema = new Schema({
    title: {
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
    }

}, {timestamps: true})

export const ProductModel = model('Product', productSchema)

// export default ProductModel