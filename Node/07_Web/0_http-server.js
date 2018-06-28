const http = require('http'),
  c = console.log,
  hostname = 'localhost',
  port = 3000,
  server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hola Mundo desde Node.js en la Web</h1>')
  })

server.listen(port, hostname, () => c(`Servidor corriendo en http://${hostname}:${port}/`))
