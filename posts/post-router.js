const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    db.select('*').from('posts')
        .then(rows => {
            res.status(200).json({data: rows})
        })
        .catch(error => {
            res.status(500).json({message: 'Esorry', le_error: error})
        })
    
});

router.get('/:id', (req, res) => {
    db('posts').where({ id: req.params.id })
    .then(rows => {
        res.status(200).json({data: rows})
    })
    .catch(error => {
        res.status(500).json({message: error})
    })
});

router.post('/', (req, res) => {
    db('posts').insert(req.body, 'id')
    .then(ids => {
        res.status(201).json({ results: ids})
    })
    .catch(error => {
        res.status(500)/json({message: 'Esorry', le_error: error})
    })
});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;