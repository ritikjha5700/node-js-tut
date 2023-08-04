/*
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Welcome to the server");
  res.end();
});

server.listen(5001);
*/

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Requested URL:", req.url); // Add this line
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`<h1>Oops!</h1>
  <p>We don't seem to find the page you are looking for</p>
  <a href="/">back to home</a>`);
});

server.listen(5001);
