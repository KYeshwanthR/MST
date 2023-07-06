// Create two files 
// Module.js : 
exports.authenticateUser = (a,b) => {
    return a+b;
};

// Auth.js
const http = require("http");
var dbmodule = require("./module");
var server = http.createServer((request,response) => {
    result = dbmodule.authenticateUser(2002,2);

    response.writeHead(200,{"content-Type":"text/html"});
    response.end("<html><body><h1> - You have connected to server 2000</h1></body></html>")
    console.log("Request received");
});

server.listen(2002);
console.log("Server is running at port 2002");

// run node Auth.js