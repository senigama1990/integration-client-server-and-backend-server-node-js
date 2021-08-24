const http = require('http')
const PORT = 3000
const host = 'localhost'
const fs = require('fs')
const path = require('path')

let server = http.createServer((request, response) => {
    if (request.url === '/' && request.method === 'GET') {
        fs.readFile(path.join('data', 'index.html'), (err, data) => {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            return response.end(data)
        })
    } else if (request.url === '/about' && request.method === 'GET') {
        fs.readFile(path.join('data', 'moduls', 'about.html'), (err, data) => {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            return response.end(data)
        })
    } else if (request.url === '/contacts' && request.method === 'GET') {
        fs.readFile(path.join('data', 'moduls', 'contacts.html'), (err, data) => {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            return response.end(data)
        })
    } else if (request.url === '/gallery' && request.method === 'GET') {
        fs.readFile(path.join('data', 'moduls', 'gallery.html'), (err, data) => {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            return response.end(data)
        })
    } else {
        response.end('Page not found')
    }
})
server.listen(PORT, () => {
    console.log(`Server is running on http://${host}:${PORT}`);
})