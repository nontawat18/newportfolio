const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Education = require('../models/Education.js');


router.get('/', (req, res, next) => {

    Education.find().then(result => {
        console.log(result);
        res.json(result)
    }).catch(error => {
        console.error(error);
    });

})

router.get('/:id', (req, res, next) => {
    Education.findById(req.params.id)
        .then(result => {
            console.log(result);
            res.json(result)
        })
        .catch(error => {
            console.error(error);
        });

})
router.post('/', (req, res, next) => {
    Education.create(req.body)
        .then(result => {
            console.log(result);
            res.json(result)
        })
        .catch(error => {
            console.error(error);
        });
})

router.patch('/:id', (req, res, next) => {
    Education.findByIdAndUpdate(req.params.id, req.body)
        .then(result => {
            console.log(result);
            res.json(result)
        })
        .catch(error => {
            console.error(error);
        });
})

router.delete('/:id', (req, res, next) => {
    Education.findByIdAndDelete(req.params.id)
        .then(result => {
            console.log(result);
            res.json(result)
        })
        .catch(error => {
            console.error(error);
        });
})

module.exports = router;