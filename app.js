const express = require("express");
const res = require("express/lib/response");
const app = express();

const { people } = require("./data");

app.use(express.static("./express-tutorial/methods-public"));

app.use(express.urlencoded({ extended: false })); //used for all incoming request

app.get("/api/user", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  console.log(name);

  if (name) {
    res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("please provide Credentials");
});

app.listen(5000, (req, res) => {
  console.log("Server is listening on port 5000...");
});
