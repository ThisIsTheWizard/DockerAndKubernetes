const http = require('http')

const app = require('./src/app')

const {connectDB} = require("./src/database/postgres");

const port = process.env.PORT || 8000

const server = http.createServer(app)

connectDB().then(() => {
    server.listen(port, () => console.log(`====> Listening on port: ${port} <====`))
})
