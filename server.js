const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:heroName', (request, response) => {
    const heroName  = (request.params.heroName).toLowerCase()
    
    if (heroes[heroName]) {
        response.json(heroes[heroName])       
    } else {
        response.json(heroes['Scooby Doo'])
    }
    
})

app.listen(PORT, () => {
    console.log(`"Server is running on ${PORT}"`)
})