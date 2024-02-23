const express = require("express");
const app = express();
const morgan = require("morgan"); // third party middleware

const { logger } = require("./logger-middleware");
const authorize = require("./authorize-middleware");
// req => middleware => res

// 1. use vs route
// 2. options - our own / express /third-party

// app.use([logger, authorize]); // our own middleware
// app.use(express.static("./public"))  // express middleware
// app.use(morgan("tiny")); // third-party middleware

app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.get("/api/products", [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send("api products page");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
