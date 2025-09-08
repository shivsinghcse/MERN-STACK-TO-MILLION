const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB);

const express = require("express");
const app = express();
const morgan = require("morgan");
app.listen(process.env.PORT);

app.use(morgan("dev"))

app.get("/user", (req, res) => {
    res.send("Success.");
})

app.post("/user", (req, res) => {
    res.send("Post success");
})

app.put("/user/:id", (req, res) => {
    res.send("PUT success");
})

app.delete("/user/:id", (req, res) => {
    res.send("Delete Success");
})