
const http = require("http");
const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    switch (req.url){
        case "/home":
            res.writeHead(200);
            res.end("<h1>This is home page</h1>");
            break;
        case "/about":
            res.writeHead(200);
            res.end("<h1>This is About page</h1>");
            break;
        case "/login":
            res.writeHead(200);
            res.end("<h1>This is Login page</h1>");
            break;
        case "/Logout":
            res.writeHead(200);
            res.end("<h1>This is Logout page</h1>");
            break;
        case "/Signin":
            res.writeHead(200);
            res.end("<h1>This is Signin page</h1>");
            break;
        case "/Contact":
            res.writeHead(200);
            res.end("<h1>This is Contact page</h1>");
            break;
        case "/Order":
            res.writeHead(200);
            res.end("<h1>This is Order page</h1>");
            break;
        default:
        break;        
    }
});

server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`)
})