const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/demodb')

.then(() => {
    console.log('DB connected');
})

.catch((err) => {
    console.log('Failed to connect with database');
    console.log(err.message);
})
const express = require('express');
const { createUser, fetchUsers, updateUser, deleteUser } = require('./modules/user.module');
const app = express()
app.listen(8080, () => {
    console.log("Server is running on 8080");
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/user', fetchUsers)

app.post('/user', createUser)

app.put('/user/:id', updateUser)

app.delete('/user/:id', deleteUser)