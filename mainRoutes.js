let express = require('express')
let path = require('path')
let mr = express.Router()

mr.get('/', function (req, res) {
  res.send("Hello World,I'm Node.js")
})

mr.get('/bald', function (req, res) {
  res.sendFile(path.join(__dirname, '.', 'bald.html'))
})

module.exports = mr
