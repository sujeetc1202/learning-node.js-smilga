const express = require("express");
const app = express();

const { logger } = require("./logger-middleware");
const authorize = require("./authorize-middleware");

app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.get("/api/products", (req, res) => {
  console.log(req.user);
  res.send("api products page");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
