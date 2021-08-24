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
        let filePath = request.url
        let reqMimeType = path.extname(filePath)
        const mimeType = {
            ".jpg": 'image/jpg',
            ".mp4": 'video/mp4',
            ".html": 'text/html',
            ".js": 'text/javascript',
            ".css": 'text/css',
            ".json": 'application/json',
            ".png": 'image/png',
            ".gif": 'image/gif',
            ".svg": 'image/svg + xml',
            ".wav": 'audio/wav',
            ".woff": 'application/font-woff',
            ".ttf": 'application/font-ttf',
            ".eot": 'application/vnd.ms=fontobject',
            ".otf": 'application/font-otf',
            ".wasm": 'application/wasm'
        }

        const contentType = mimeType[reqMimeType] || 'application/octet-stream'
        fs.readFile(path.join('data', filePath), (err, data) => {
            response.writeHead(200, {'Content-Type': contentType})
            return response.end(data)
        })
    }
})
server.listen(PORT, () => {
    console.log(`Server is running on http://${host}:${PORT}`);
})