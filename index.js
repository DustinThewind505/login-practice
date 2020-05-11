const express = require('express');
const shortid = require('shortid');

const server = express();

const PORT = 420;

server.use(express.json());

let hikers = [
    {
        "id": 0,
        "name": "Zig",
        "bio": "She's hardcore"
    },
    {
        "id": 1,
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

server.listen(PORT, () => 
    console.log(`\n ** API listening on http://localhost${PORT} ** \n`)
);