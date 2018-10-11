console.log("Hello, World!")

var http = require("http");

http.createServer(function (requrest, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello world\n');
}).listen(259);

console.log('Server running at http://127.0.0.1:23/');
