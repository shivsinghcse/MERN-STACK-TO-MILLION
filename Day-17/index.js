const http = require("http");
const { MongoClient } = require("mongodb");

MongoClient.connect("mongodb://127.0.0.1:27017")

  .then(async (client) => {
    console.log("Connected");
    const db = client.db("ecom");
    const user = db.collection("users");
    const x = await user.insertOne({
      name: "Shiv Singh",
      email: "shiv0204@gmail.com",
      mobile: "9140520890",
    });

    console.log(x);
  })

  .catch((err) => {
    // console.log("Failed to connect with database");
    console.log(err.message);
    process.exit(0);
  });

const server = http.createServer((req, res) => {
  const url = req.url;
  const type = { "content-type": "application/json" };
  const method = req.method;

  if (url !== "/user") {
    res.writeHead(404, type);
    res.end(JSON.stringify({ message: "Endpoint not found" }));
    return;
  }

  if (method === "GET") {
    res.writeHead(200, type);
    res.end(JSON.stringify({ message: "User data fetched" }));
    return;
  }

  if (method === "POST") {
    res.writeHead(200, type);
    res.end(JSON.stringify({ message: "User data stored" }));
    return;
  }

  if (method === "PUT") {
    res.writeHead(200, type);
    res.end(JSON.stringify({ message: "User data updated!" }));
    return;
  }

  if (method === "DELETE") {
    res.writeHead(200, type);
    res.end(JSON.stringify({ message: "User data deleted!" }));
    return;
  }

  res.writeHead(405, type);
  res.end(JSON.stringify({ message: "Method not allowed" }));
}); // it will return instance of server

server.listen(8080);
