const express = require("express");
const app = express();

// req => middleware => res
const { logger } = require("./logger-middleware");

app.use(logger); // this is for global apply of logger middleware
app.use("/api", logger); // this will apply for urls starting with "/api" ex: api/home/products

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/products/1/reviews", (req, res) => {
  res.send("Reviews");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
