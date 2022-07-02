const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Home page");
  }
  if (req.url === "/about") {
    res.end("Here is About page");
  }
  // res.end(`
  //   <h1>Oops</h1>
  //   <p>
  //     Go to home page <a href="/">Home</a>
  //   </p>`);
});

server.listen(5000);
