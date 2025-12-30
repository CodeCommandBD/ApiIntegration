// http routing and nodemone package
// req url for routing

const http = require("http");
const fs = require("fs");

const port = 8080;

const server = http.createServer((req, res) => {
  const handle = (status, fileLocation) => {
    res.writeHead(status, { "Content-Type": "text/html" });
    fs.readFile(fileLocation, (err, data) => {
      res.write(data);
      res.end();
    });
  };

  if (req.url === "/") {
    handle(200, "home.html");
  } else if (req.url === "/about") {
    handle(200, "about.html");
  } else {
    handle(404, "404.html");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
