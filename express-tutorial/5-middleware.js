const express = require("express");

const app = express();
// req => middleware => res
const logger = require("./logger");

const authorize = require("./authorize");
//Middleware
app.use([logger, authorize]); // which one is first that only display on first

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/product", (req, res) => {
  res.send("Product");
});

app.get("/api/items", (req, res) => {
  //?user=Ratheesh&limit=1 this is the code after path to check user and limit
  res.send("Items");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
