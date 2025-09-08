const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    fullname: String,
    email: String,
    mobile: Number,
    password: String
}, {timestamps: true});

const UserModel = model("User", userSchema);

module.exports = UserModel;