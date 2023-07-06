// npm install -g nodemon 
// run : nodemon filename
// watches for changes in the code and restarts 

const http = require('http');
var server = http.createServer(
    (req,res) => {
        res.write("Hello ! I have created my second server!");
        res.end();
    }
);

server.listen(3000);
console.log("server stand... Running on localhost:3000");