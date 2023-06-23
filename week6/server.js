consthttp = require("http");
consthost = 'localhost';
constport = 8000;
constrequestListner = function (req, res) 
{
    res.end("My first server!"); 
};
constserver = http.createServer(requestListner);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})