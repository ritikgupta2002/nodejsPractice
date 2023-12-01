const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()} ${req.url} new req received\n`;
  fs.appendFile("./text.txt", log, (err, data) => {
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    switch(myUrl.pathname){
      case "/":
            res.end("Homepage");
            break;
        case "/about":
            const username=myUrl.query.q;
            const id=myUrl.query.userid
            res.end(`I am ${username} with id ${id}`);
            break;
        case "/signup":
            if(req.method === "GET") res.end("Signup form");
            else if (req.method === "POST"){
              res.end("User signed up successfully");
            }
        default:
            res.end("Page not found");
    }
  });
});

server.listen(8000, () => console.log("server started"));
