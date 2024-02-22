const express = require("express");
const app = express();

// req => middleware => res

// When you have middleware where you are setting some kind of logic unless you are sending back response yourself
// Either you termination whole cycle or pass it to the next function by calling next
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);

  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
