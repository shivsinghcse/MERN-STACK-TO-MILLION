const UserSchema = require("../schema/user.schema")
const { ObjectId } = require("mongodb")

const createUser = async (req, res)=>{
    const user = await UserSchema.create(req.body)
    res.status(200).json(user)
}


const fetchUser = async (req, res) => {
    const users = await UserSchema.find();
    res.status(200).json(users);
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = await UserSchema.findByIdAndUpdate({_id: new ObjectId(id)}, {$set :req.body}, {new: true})
    res.status(200).json(user);
} 

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await UserSchema.findByIdAndDelete({_id: new ObjectId(id)})
    res.send(user);
}

module.exports = {
    createUser,
    fetchUser,
    updateUser, 
    deleteUser
}