const express = require('express')
const {createProduct, updateProduct, deleteProduct, fetchProducts} = require('./modules/product')
const app = express()
app.listen(8080, ()=>{
    console.log("Server is running 8080");
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/product', fetchProducts)

app.post('/product', createProduct)

app.put('/product/:id', updateProduct)

app.delete('/product/:id', deleteProduct)
