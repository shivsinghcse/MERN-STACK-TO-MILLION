const { ObjectId } = require("mongodb")
const { type, getMessage } = require("./common")
const queryString = require('querystring')
const url = require('url')

const createUser = (req, res, userCollection) => {
    try
    {
        let payload = "" 
        req.on('data', (chunks) => {
            payload = payload + chunks.toString()
        })

        req.on('end', async () => {
            const data = queryString.parse(payload)
            data.createdAt = new Date()
            await userCollection.insertOne(data)
            res.writeHead(200, type)
            res.end(JSON.stringify(data))
        })
    }
    catch(err)
    {
        const message = getMessage(err.message)
        res.writeHead(500, type)
        res.end(message)
    }
}

const fetchUsers = async (req, res, userCollection) => {
    try
    {
        const users = await userCollection.find().sort({createdAt: -1}).toArray()
        res.writeHead(200, type)
        res.end(JSON.stringify(users))

    }
    catch(err)
    {
        const message = getMessage(err.message)
        res.writeHead(500, type)
        res.end(message)
    }

}

const updateUser =  (req, res, userCollection) => {
    try
    {
        let payload = ''
        req.on('data', (chunks) => {
            payload = payload + chunks.toString()
        })

        req.on('end', async () => {
            const data = queryString.parse(payload)
            const {id} = url.parse(req.url, true).query
            await userCollection.updateOne({_id: new ObjectId(id)}, {$set: data})
            res.writeHead(200, type)
            res.end(JSON.stringify(data))
        })
    }
    catch(err)
    {
        const message = getMessage(err.message)
        res.writeHead(500, type)
        res.end(message)
    }
}

const deleteUser = async (req, res, userCollection) => {
    try
    {
        const {id} = url.parse(req.url, true).query
        console.log(id);
        const message = getMessage('User deleted successfully.')
        // const userId = new ObjectId('69c15072422a6d07c42ce65b')
        const userId = new ObjectId(id)
        await userCollection.deleteOne({_id: userId})
        res.writeHead(200, type)
        res.end(message)
    }
    catch(err)
    {
        const message = getMessage(err.message)
        res.writeHead(500, type)
        res.end(message)
    }
}

module.exports = {
    createUser,
    fetchUsers,
    updateUser,
    deleteUser
}