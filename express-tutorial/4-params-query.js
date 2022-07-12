// npm start for the server

const express = require("express");

const app = express();

// setup static and middleware
// app.use(express.static("./"));

const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.send(`<h1>Home page</h1><a href='api/products'>products</a>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    // console.log(id);
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  // console.log(req.params);
  const { productID } = req.params;
  // console.log(productID);
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!singleProduct) {
    return res.status(400).send("Product Does Not Exist");
  }
  return res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  // console.log(req.params);
  const { productID, reviewID } = req.params;
  console.log(productID, reviewID);
  res.send("Hello World");
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = products;

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    res.status(200).send("no products matched your search");
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});

// npm start for the server
