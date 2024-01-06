const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Experience = require('../models/Experience.js');


router.get('/', (req, res, next) => {

    Experience.find().then(result => {
        console.log(result);
        res.json(result)
    }).catch(error => {
        console.error(error);
    });

})

router.get('/:id', (req, res, next) => {
    Experience.findById(req.params.id)
        .then(result => {
            console.log(result);
            res.json(result)
        })
        .catch(error => {
            console.error(error);
        });

})
router.post('/', (req, res, next) => {
    Experience.create(req.body)
        .then(result => {
            console.log(result);
            res.json(result)
        })
        .catch(error => {
            console.error(error);
        });
})

router.patch('/:id', (req, res, next) => {
    Experience.findByIdAndUpdate(req.params.id, req.body)
        .then(result => {
            console.log(result);
            res.json(result)
        })
        .catch(error => {
            console.error(error);
        });
})

router.delete('/:id', (req, res, next) => {
    Experience.findByIdAndDelete(req.params.id)
        .then(result => {
            console.log(result);
            res.json(result)
        })
        .catch(error => {
            console.error(error);
        });
})

module.exports = router;