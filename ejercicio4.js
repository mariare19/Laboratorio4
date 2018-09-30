var http = require('http');
var HttpDispatcher = require('httpdispatcher');
var dispatcher = new HttpDispatcher();

const port = 8080;

function handleRequest(request, response) {
    try {
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
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let obj = {
        hello: 'Maria'
    }
    res.end(JSON.stringify(obj));
});

dispatcher.onError(function (req, res) {
    res.writeHead(404);
    res.end("Error, the URL doesn't exist");
});

server.listen(port);