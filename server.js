const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

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
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:heroName', (request, response) => {

    const herosName  = request.params.heroName.toLowerCase()
    
    if (heroes[herosName]) {
        response.json(heroes[herosName])       
    } else {
        response.json(heroes['Scooby Doo'])
    }
    

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`"Server is running on ${PORT}"`)
})