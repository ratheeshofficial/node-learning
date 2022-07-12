const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Homeeeeeeeeeeeeeeee Page");
});
app.get("/about", (req, res) => {
  res.status(200).send("Aboutttttttttttttttttttt Page");
});

app.get("*", (req, res) => {
  res.status(400).send("<h1>resources not found</h1>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
