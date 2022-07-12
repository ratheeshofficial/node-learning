const authorize = (req, res, next) => {
  //   console.log("authorize");
  const { user, id } = req.query;
  console.log(user, id);
  if (user === "ratheesh") {
    req.user = { name: "ratheesh", id: 1 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
  next();
};

module.exports = authorize;
