var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>We are students</h1></body></html>');
        res.end();
    } else if (req.url == '/home') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>We are at home</h1></body></html>');
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>Page not found</h1></body></html>');
        res.end();
    }
});

server.listen(2000, () => {
    console.log("Server running at port 2000");
});
