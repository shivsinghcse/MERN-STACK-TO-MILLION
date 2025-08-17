const http = require("http");
// const mongodb = require("mongodb");
// console.log(mongodb);
const { MongoClient } = require("mongodb");
const conn = MongoClient.connect("mongodb://localhost:27017");
console.log(conn);

conn
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Failed to connect with database");
    console.log(err.message)
    process.exit(0)
  });
const server = http.createServer((req, res) => {
  //   res.statusCode = 500;
  //   res.end("failed");

  const username = "demo@gmail.com";
  const password = "hello@1234";

  if (username === "demo@gmail.com") {
    if (password === "hello@1234") {
      res.end("Success");
    } else {
      res.statusCode = 401;
      res.end("Incorrect Password");
    }
  } else {
    res.statusCode = 404;
    res.end("User does not exsit please register or signup to continue");
  }
});

server.listen(8080);
