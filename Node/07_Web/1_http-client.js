const http = require('https'),
  c = console.log,
  options = {
    host: 'ed.team',
    port: 443,
    path: '/cursos'
  }

http
  .get(options, res => c(`El sitio ${options.host} ha respondido. Código: ${res.statusCode}. Mensaje: ${res.statusMessage}.`))
  .on('error', err => c(`El sitio ${options.host} no respondió. Código: ${err.code}. Mensaje: ${err.message}.`))
