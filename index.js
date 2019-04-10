let express = require('express')
let app = express()
let bodyParser = require('body-parser')

let routermod = require('./mainRoutes')
let classroutes = require('./classroutes')
let port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routermod)
app.use('/class', classroutes)
app.use('/cdn', express.static('public'))

app.listen(port)
console.log('Express server running on port 3000')
