const http = require('http')
const mongo = require('mongodb').MongoClient
const url = require('url')
const { type } = require('./modules/common')

let db = null

mongo.connect('mongodb://localhost:27017')

.then((client) => {
    db = client.db('quickby')
    console.log('DB connected');
})

.catch((err) => {
    console.log(err.message);
    process.exit(1)
})

const server = http.createServer((req, res) => {
    const {pathname} = url.parse(req.url)

    if(pathname !== '/product')
    {
        res.writeHead(404, type)
        res.end('API does not found')
        return
    }

    if(!db)
    {
        res.writeHead(500, type)
        res.end('database is not initialized')
    }

    const method = req.method

    if( method !== 'GET' && method !== 'POST' && method !== 'PUT' && method !== 'DELETE')
    {
        res.writeHead(405, type)
        res.end('Method not found')
    }

    if(method === 'GET')
    {
        res.writeHead(200, type)
        res.end("Get request")
        
    }

    if(method === 'POST')
    {
        res.writeHead(200, type)
        res.end('POST request')
        
    }

    if(method === 'PUT')
    {
        res.writeHead(200, type)
        res.end('PUT request')
        
    }

    if(method === 'DELETE')
    {
        res.writeHead(200, type)
        res.end('Delete request')
        
    }

    
})

server.listen(8080, () => {
    console.log('server is running on 8080');
})

