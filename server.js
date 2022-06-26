const express = require('express')
const app = express()
const PORT = 8000

const heroes = {
    "captain america": {
        "city": "Washington DC",
        "moviesAppear" : ["Captain America: The First Avenger", "Captain America: The Winter Soldier", "Captain America: Civil War"],
        'moviesMention' : []
    ,}
    "Ironman": {
        "city": "New York",
        "moviesAppear" : ["Ironman", "Ironman 2", 'Ironman 3'],
        'moviesMention' : []

    }
}

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json()
})

app.listen(PORT, () => {
    console.log(`"Server is running on ${PORT}"`)
})