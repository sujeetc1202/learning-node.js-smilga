const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user hits the server");
  res.end("Welcome Express");
});

server.listen(5000);
