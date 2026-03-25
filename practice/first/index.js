const http = require('http')
const url = require('url')
const { MongoClient } = require('mongodb')
const { createUser, fetchUsers, updateUser, deleteUser } = require('./modules/user')
const { getMessage, type } = require('./modules/common')

let db = null
const conn = MongoClient.connect('mongodb://localhost:27017')

conn
.then( async (client) => {
    db = client.db("ecom")
    console.log('DB connected');
})
.catch((err) => {
    console.log(err.message);
    process.exit(1)
})

const server = http.createServer( async (req, res) => {
    
    const parsedUrl = url.parse(req.url, true)
    const endpoint = parsedUrl.pathname
    const method = req.method


    if(endpoint !== '/user')
    {
        const messsage = getMessage('API does not exist')
        res.writeHead(404, type)
        res.end(messsage)
        return
    }

    if(!db)
    {
        const message = getMessage('DB not initialized yet')
        res.writeHead(404, type)
        res.end(message)
        return
    }
    
    const userCollection = db.collection('users')


    if(method !== 'GET' && method !== 'POST' && method !== 'PUT' && method !== 'DELETE')
    {
        const message = getMessage('method not allowed')
        res.writeHead(405, type)
        res.end(message)
        return
    }
    
    
    if(method === 'GET') fetchUsers(req, res, userCollection)

    if(method === 'POST') createUser(req, res, userCollection)

    if(method === 'PUT') updateUser(req, res, userCollection)
    
    if(method === 'DELETE') deleteUser(req, res, userCollection)
    
})

server.listen(8080, () => {
    console.log('Server is running on 8080');
})