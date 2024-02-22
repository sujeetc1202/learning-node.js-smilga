const http = require("http");

const server = http.createServer((req, res) => {
  // two most useful req methods
  // req.method
  // req.url

  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Welcome Expresss</h1>");
  res.end();
});

server.listen(5000);
