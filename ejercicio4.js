var http = require('http');
var dispatcher = require('httpdispatcher');

const port = 8080;

function handleRequest(request, response) {
    try {
        console.log(request.url);
        dispatcher.dispatch(request, response);
    } catch (err) {
        console.log(err);
    }
}

var server = http.createServer(handleRequest);

dispatcher.onGet("/", function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hey, this is the homepage of your server</h1>');
});

dispatcher.onGet("/hello", function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome homepage');
});

dispatcher.onError(function (req, res) {
    res.writeHead(404);
    res.end("Error, the URL doesn't exist");
});

server.listen(port);