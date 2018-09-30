var http = require('http');
var HttpDispatcher = require('httpdispatcher');
var dispatcher = new HttpDispatcher();

var server = http.createServer(function (request, response) {
    try {
        dispatcher.dispatch(request, response);
    } catch (err) {
        console.log(err);
    }
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
    res.end("Error, la url no existe!");
});

server.listen(8080);