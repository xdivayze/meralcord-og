import express from 'express'
import * as path from 'path'
import * as fs from 'fs'
import * as https from 'https'
import * as http from 'http'

const app = express()
app.use(express.static(path.join(__dirname, "../build/")))

const HTTP_PORT = 3080
const HTTPS_PORT = 4443

const private_key = fs.readFileSync(path.join(__dirname, "../tls/private-key.pem"), "utf-8")
const certificate = fs.readFileSync(path.join(__dirname, "../tls/certificate.pem"), "utf-8")
const credentials = { key: private_key, cert: certificate }

const httpsServer = https.createServer(credentials, app)
httpsServer.listen(HTTPS_PORT)

const httpServer = http.createServer((req, res) => {
  res.writeHead(301, { location: `https://${req.headers.host}${req.url}` })
  res.end()
})
httpServer.listen(HTTP_PORT)

console.log("listening on http port ", HTTP_PORT, " https port ", HTTPS_PORT)
