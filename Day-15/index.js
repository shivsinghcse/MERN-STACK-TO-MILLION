const http = require("http");
const queryString = require("querystring");
const server1 = http.createServer((req, res) => {
  if (1 === 1) {
    res.statusCode = 200;
    // console.log(req.url);
    const q = req.url.slice(2);
    // const payload = queryString.parse(q);
    const { name, pwd } = queryString.parse(q);
    // console.log(payload);
    console.log(name, pwd);
    res.end("Hello from server!");
  } else {
    res.statusCode = 500;
    res.end("Failed");
  }
});

server1.listen(4040);

// static login

// const http = require("http");
// const queryString = require("querystring");
const server = http.createServer((req, res) => {
  const q = req.url.slice(2);
  const { username, password } = queryString.parse(q);

  // if (username === "shiv0402") {
  //   if (password === "1234") {
  //     res.statusCode = 200;
  //     res.end("Login Success!");
  //   } else {
  //     res.statusCode = 401;
  //     res.end("Incorrect Password");
  //   }
  // } else {
  //   res.statusCode = 404;
  //   res.end("User not found!");
  // }

  if (username !== "shiv0402") {
    res.statusCode = 404;
    res.end("User does not exist.");
    return;
  }

  if (password !== "1234") {
    res.statusCode = 401;
    res.end("Incorrect password");
    return;
  }

  res.statusCode = 200;
  res.end("Login Success!");
});

server.listen(8080);
