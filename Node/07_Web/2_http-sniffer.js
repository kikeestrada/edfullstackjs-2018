const server = require('http'),
  client = require('https'),
  c = console.log,
  hostname = 'localhost',
  port = 3000,
  options = {
    host: 'ed.team',
    port: 443,
    path: '/cursos'
  },
  httpClient = res => {
    c(`El sitio ${options.host} ha respondido. Código: ${res.statusCode}. Mensaje: ${res.statusMessage}.`)
    res.on('data', data => {
      htmlCode += data
      c(data, data.toString())
    })
  },
  httpError = err => c(`El sitio ${options.host} no respondió. Código: ${err.code}. Mensaje: ${err.message}.`),
  webServer = (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(htmlCode)
  }

let htmlCode = ''

//instancia cliente HTTP o HTTPs
client
  .get(options, httpClient)
  .on('error', httpError)

//instancia servidor local HTTP
server
  .createServer(webServer)
  .listen(port, hostname, () => c(`Servidor corriendo en http://${hostname}:${port}/`))
