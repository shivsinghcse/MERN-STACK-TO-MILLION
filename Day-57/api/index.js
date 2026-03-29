import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
mongoose.connect(process.env.DB)

import express from 'express'
import cors from 'cors'
import { createProduct, fetchProducts, updateProduct, deleteProduct } from './controller/product.controller.js'
const app = express()
app.listen(process.env.PORT || 8080, () => console.log('server is running on port:', process.env.PORT))

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/', createProduct)
app.get('/', fetchProducts)
app.put('/:id', updateProduct)
app.delete('/:id', deleteProduct)
