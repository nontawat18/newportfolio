const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Skill = require('../models/Skill.js');


router.get('/', (req, res, next) => {

    Skill.find().then(result => {
        console.log(result);
        res.json(result)
    }).catch(error => {
        console.error(error);
    });

})

router.get('/:id', (req, res, next) => {
    Skill.findById(req.params.id)
        .then(result => {
            console.log(result);
            res.json(result)
        })
        .catch(error => {
            console.error(error);
        });

})
router.post('/', (req, res, next) => {
    Skill.create(req.body)
        .then(result => {
            console.log(result);
            res.json(result)
        })
        .catch(error => {
            console.error(error);
        });
})

router.patch('/:id', (req, res, next) => {
    Skill.findByIdAndUpdate(req.params.id, req.body)
        .then(result => {
            console.log(result);
            res.json(result)
        })
        .catch(error => {
            console.error(error);
        });
})

router.delete('/:id', (req, res, next) => {
    Skill.findByIdAndDelete(req.params.id)
        .then(result => {
            console.log(result);
            res.json(result)
        })
        .catch(error => {
            console.error(error);
        });
})

module.exports = router;