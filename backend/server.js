const http = require("http")
const fs = require('fs')
const path = require('path')
const PORT = 4000
const host = 'localhost'

const {users} = require('./database/users')

let server = http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    if (request.url === '/users' && request.method === 'GET') {
        response.writeHead(200, {'Content-Type': 'application/json'})
        return response.end(JSON.stringify(users))
    } else {
        return response.end('Page not found')
    }
})

server.listen(PORT, ()=> console.log(`Server is running on http://${host}:${PORT}`))