const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Homepage");
  }

  if (req.url === "/about") {
    res.end("Here is our sort history (About page)");
  }
  res.end(`
  <h1>Oops!</h1>
  <p> we can't seem to find the page you are looking for </p>
  <a href="/">back home</a>
    `);
  //   res.write("Welcome to Homepage");
  //   res.end();
});

server.listen(5000);
