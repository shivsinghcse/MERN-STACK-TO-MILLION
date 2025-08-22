// e-commerce
// /product
// /cart
// /user

const http = require("http");
const queryString = require("querystring");
const { json } = require("stream/consumers");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const endPoint = parsed.pathname;

  //   if (endPoint === "/product") {
  //     res.end("succcess");
  //   } else {
  //     res.end("Not Found");
  //   }

  if (endPoint !== "/product") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "API does not exist." }));
    return;
  }

  const method = req.method;

  if (method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Here is you fetched data." }));
    return;
  }

  if (method === "POST") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Here is your stored data" }));
    return;
  }

  if (method === "PUT") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Here is your updated data" }));
    return;
  }
  if (method === "DELETE") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Here is your deleted data" }));
    return;
  }

  res.writeHead(405, { "content-type": "application/json" });
  res.end(JSON.stringify({ message: "Method not allowed" }));
});

server.listen(8080);
