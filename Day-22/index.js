const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')
mongoose.connect(process.env.DB)  

const express = require('express')
const morgan = require('morgan')
const { createProduct, fetchProducts, updateProduct, deleteProduct } = require('./controller/product.controller')
const app = express()
app.listen(process.env.PORT, () => {
    console.log('Server is running on port:', process.env.PORT);
})

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/product', fetchProducts)

app.post('/product', createProduct)

app.put('/product/:id', updateProduct)

app.delete('/product/:id', deleteProduct)