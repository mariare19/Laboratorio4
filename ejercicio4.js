var http = require('http')
var finalhandler = require('finalhandler')
var Router = require('router')

var router = new Router()
var server = http.createServer(function onRequest(req, res) {
    router(req, res, finalhandler(req, res))
})

router.route('/hello/:name').get(function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ hello: req.params.name }))
}).all(function (req, res) {
    res.end();
})

server.listen(8080)