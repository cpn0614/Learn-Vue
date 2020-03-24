const http = require('http')
const express = require('express')

const app = express()
const config = {
  ip: 'localhost',
  port: '5000'
}


http.createServer(app).listen(config.port, config.ip, function() {
  console.log('server is running at http://%s:%s', config.ip, config.port)
})