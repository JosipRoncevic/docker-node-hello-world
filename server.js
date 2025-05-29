
var http = require('http')
var os = require('os') // <-- dodano

var port = 8080

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hostname of a host is: ' + os.hostname() + '\n') // <-- promjena ovdje
})

server.listen(port)

console.log('Server running at http://localhost:' + port)

