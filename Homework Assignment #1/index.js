/*
 * Homework Assignment #1 Nodejs Master Class
 * Author Vladimir Velanac
 *
 */

const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;

    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();

    const hellowMessage = JSON.stringify({ 'message': 'Hello World' });

    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);

    trimmedPath == 'hello' && method == 'post' ? res.end(hellowMessage) : res.end();
});

server.listen(3000, function () {
    console.log('The servier is listening on port 3000');
});