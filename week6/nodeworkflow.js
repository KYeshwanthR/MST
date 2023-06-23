const http = require("http");
var server = http.createServer((req, res) => { 
    res.write("Hello ! I have created my second server!");
    res.end();
});
server.listen(5000);
console.log("Server started... Running on localhost:5000"); 