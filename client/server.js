const http = require('http')
const PORT = 3000
const host = 'localhost'

let server = http.createServer((request, response) => {
    
})
server.listen(PORT, () => {
    console.log(`Server is running on http://${host}:${PORT}`);
})