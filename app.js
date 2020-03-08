const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200; 
	res.setHeader('Content-Type', 'text/html');
	if (req.url == "/index.html") {
		res.write("You've found the secret link");
		res.
	}
	res.end();
}).listen(port);

