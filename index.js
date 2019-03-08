let express = require('express')
let app = express()
let routermod = require('./mainRoutes')
let port = process.env.PORT || 3000
app.use(routermod.mainRouter)

app.listen(port)
console.log('Express server running on port 3000')
