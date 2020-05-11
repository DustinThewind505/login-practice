const express = require('express');
const shortid = require('shortid');

const server = express();

const PORT = 420;

server.use(express.json());

let hikers = [
    {
        "id": shortid.generate(),
        "name": "Zig",
        "bio": "She's hardcore"
    },
    {
        "id": shortid.generate(),
        "name": "Zig",
        "bio": "She's hardcore"
    }
]

server.get('/api/hikers', (req, res) => {
    res.status(200).json(hikers)
})

server.post('/api/hikers', (req, res) => {
    const newHiker = req.body;

    newHiker.id = shortid.generate();

    hikers.push(newHiker);

    res.status(201).json(newHiker);
})

server.delete('/api/hikers/:id', (req, res) => {
    const { id } = req.params;

    const found = hikers.find(hiker => hiker.id === id)

    if(found) {
        hikers = hikers.filter(hiker => hiker.id !== id);
        res.status(200).json(found);
    } else {
        res.status(404).json({"message": "Hiker not found"})
    }
})

server.listen(PORT, () => 
    console.log(`\n ** API listening on http://localhost${PORT} ** \n`)
);