import express from 'express'
import * as path from 'path'
import * as fs from 'fs'
import * as https from 'https'
import * as http from 'http'
import mongoose from 'mongoose'
import init from './DB/init'

const app = express()
app.use(express.static(path.join(__dirname, "../build/")))

const MONGO_URL = "mongodb://127.0.0.1:27017/meralcord"

init()

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


process.on('SIGINT', () => {
  mongoose.connection.dropDatabase().then(() => {
    console.log('db dropped')
    mongoose.connection.close()
    console.log('conn dropped')
    process.exit(0)
  }).catch((err) => {
    console.error('err occured when dropping the database ', err)
    process.exit(-1)
  })
})

export { mongoose, MONGO_URL }
