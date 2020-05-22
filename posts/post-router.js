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
    .first()
    .then(post => {
        if(post){
            res.status(200).json({data: post})
        } else {
            res.staatus(404).json({message: 'post not found'})
        }
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
    db('posts').where({id: req.params.id})
    .update(req.body)
    .then(count => {
        if(count) {
            res.status(200).json({message: 'post was updated'})
        } else {
            res.status(404).json({message: 'post not found'})
        }
    })
    .catch(error => {
        res.status(500).json({message: 'Esorry', le_error: error})
    })

});

router.delete('/:id', (req, res) => {
    db('posts').where({id: req.params.id})
    .delete()
    .then(count => {
        if(count){
            console.log(count)
            res.status(200).json({message: `deleted post`})
        } else {
            res.status(404).json({message: `post not found`})
        }
    })
    .catch(error => {
        res.status(500)/json({message: 'Esorry', le_error: error})
    })
});

module.exports = router;