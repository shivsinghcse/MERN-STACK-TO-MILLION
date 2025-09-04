const http = require("http");
const { MongoClient } = require("mongodb");
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

const getMessage = (msg) => {
  return JSON.stringify({
    message: msg,
  });
};

const server = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;
  const type = {
    "content-Type": "application/json",
  };

  if (url !== "/user") {
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

  if (method == "GET") {
    try {
      const User = db.collection("users");
      const users = await User.find().toArray();

      res.writeHead(200, type);
      res.end(JSON.stringify(users));
      return;
    } catch (err) {
      const message = getMessage(err.message);
      res.writeHead(500, type);
      res.end(message);
    }
  }

  if (method == "POST") {
    try {
      const payload = {
        name: "Laxmi",
        email: "laxmi123@gmail.com",
        mobile: 9140404050,
      };
      const User = db.collection("users");
      await User.insertOne(payload);

      res.writeHead(200, type);
      res.end(JSON.stringify(payload));
      return;
    } catch (err) {
      const message = getMessage(err.message);
      res.writeHead(500, type);
      res.end(message);
    }
  }

  if (method == "PUT") {
    res.writeHead(200, type);
    res.end(JSON.stringify({ message: "User updated." }));
    return;
  }

  if (method == "DELETE") {
    res.writeHead(200, type);
    res.end(JSON.stringify({ message: "User deleted." }));
    return;
  }

  res.writeHead(405, type);
  res.end(JSON.stringify({ message: "Endpoint not found." }));
});

server.listen(8080);
