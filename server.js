const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
        `<h1>Sample Node.js Application /h1>
        <p>This page is served using pure Node.js HTTP module.</p>
        <p>Current Time: ${new Date().toLocaleString()}</p>`
    );
});

const PORT = 3000;
const HOST = '0.0.0.0';   // IMPORTANT FIX

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
