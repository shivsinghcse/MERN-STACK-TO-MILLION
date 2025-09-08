const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/demoone")

const express = require("express");
const { createUser, fetchUser, updateUser, deleteUser } = require("./module/user.module");
const app = express();
app.listen(8080);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/user", fetchUser)

app.post("/user", createUser)

app.put("/user/:id", updateUser)

app.delete("/user/:id", deleteUser)
