const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url === "/") {
        res.end("Welcome to my server!");
    } else if (req.url === "/about") {
        res.end("I am Cynthia, an aspiring fullstack developer!");
    } else if (req.url === "/lab") {
        res.end("Welcome to the Lab Result Tracker API!");
    } else {
        res.end("Page not found!")
    }
}); 

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

