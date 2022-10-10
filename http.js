const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome node");
  }
  if (req.url === "/about") {
    res.end("hello World");
  }
  // console.log(req);
  // res.write('Welcome node')
  res.end(`
    <h1>OOps!</h1>
    <p>Cannot find the page</p>
    <a href="/">back home</a>
    `);
});
server.listen(5000);
