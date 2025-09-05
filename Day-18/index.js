const http = require("http");
const { MongoClient } = require("mongodb");
const { createUser, fetchUser, updateUser, deleteUser } = require("./modules/user");
const {type, getMessage} = require("./modules/common")

let db = null;
const conn = MongoClient.connect("mongodb://127.0.0.1:27017");

conn

  .then((client) => {
    db = client.db("ecom");
  })

  .catch((err) => {
    console.log(err.message);
    process.exit(0);
  });


const server = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;
  

  if (!url.startsWith("/user")) {
    const message = getMessage("Endpoint not found.");
    res.writeHead(404, type);
    res.end(message);
    return;
  }

  if (!db) {
    const message = getMessage("Database not initilised yet.");
    res.writeHead(500, type);
    res.end(message);
    return;
  }

  const userCollection = db.collection("users");

  if (method == "GET") return fetchUser(req, res, userCollection)

  if (method == "POST") return createUser(req, res, userCollection)

  if (method == "PUT") return updateUser(req, res, userCollection)

  if (method == "DELETE") return deleteUser(req, res, userCollection)

  res.writeHead(405, type);
  res.end(JSON.stringify({ message: "Endpoint not found." }));
});

server.listen(8080);
