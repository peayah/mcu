const express = require('express')
const app = express()
const PORT = 8000

const heroes = {
    "captain america": {
        "city": "Washington DC",
        "moviesAppear" : ["Captain America: The First Avenger", "Captain America: The Winter Soldier", "Captain America: Civil War"],
        'moviesMention' : []
    },
    "ironman": {
        "city": "New York",
        "moviesAppear" : ["Ironman", "Ironman 2", 'Ironman 3'],
        'moviesMention' : []

    },
     "Scooby Doo": {
        "city": "Scooby Doo",
        "moviesAppear" : ["Scooby Doo"],
        'moviesMention' : ["Scooby Doo"]

    }
}

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