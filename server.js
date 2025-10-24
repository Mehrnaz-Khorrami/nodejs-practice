const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Node");
  } else if (req.url === "/time") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Current time: ${new Date().toLocaleTimeString()}`);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Mehrnaz Khorrami");
  } else if (req.url === "/random") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    const myRandom = Math.floor(Math.random() * (100 - 1) + 1);
    res.end(myRandom.toString());
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
