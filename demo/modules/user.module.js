const UserSchema = require('../schema/user.schema')

const createUser = async (req, res) => {
    const user = await UserSchema.create(req.body)
    res.status(200).json(user)
}

const fetchUsers = async(req, res) => {
    const users = await UserSchema.find()
    res.status(200).json(users)
}

const updateUser = async (req, res) => {
    const { id } = req.params
    const user = await UserSchema.findByIdAndUpdate(id, req.body, {new: true})
    res.status(200).json(user)
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    const user = await UserSchema.findByIdAndDelete(id)
    res.status(200).json(user)
}

module.exports = {
    createUser,
    fetchUsers,
    updateUser,
    deleteUser
}