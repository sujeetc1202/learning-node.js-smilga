const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "john") {
    req.user = { name: "john", id: 3 };
    next();
  } else {
    req.status(401).send("Unautorize");
  }

  console.log("authorize");
  next();
};

module.exports = authorize;
