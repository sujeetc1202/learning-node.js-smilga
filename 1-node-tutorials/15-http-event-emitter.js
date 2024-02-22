const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("welcome");
// });

// Using event emitter API
const server = http.createServer();
// emit request events
// subscribr to it/ listen to it / respond to it

server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
