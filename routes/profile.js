const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Profile = require('../models/Profile.js');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });
router.post('/', upload.single('picturePath'), async(req, res) => {
    try {
        const {
            fullname,
            email,
            phoneNumber,
            address,
            summaryDetail,
            education,
            experience,
            skill
        } = req.body;
        const picturePath = req.file ? req.file.filename : null;

        const newProfile = await Profile.create({
            fullname,
            email,
            phoneNumber,
            address,
            summaryDetail,
            picturePath,
            education,
            experience,
            skill
        });

        res.json(newProfile);
    } catch (error) {
        console.error(error.message);

        res.status(500).json({ error: error.message });
    }
});

router.get('/uploads/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../uploads', filename);

    res.sendFile(filePath);
});

router.get('/', (req, res, next) => {

    Profile.find().then(result => {
        console.log(result);
        res.json(result)
    }).catch(error => {
        console.error(error);
    });

})

router.get('/:id', (req, res, next) => {
    Profile.findById(req.params.id)
        .then(result => {
            console.log(result);
            res.json(result)
        })
        .catch(error => {
            console.error(error);
        });

})


router.patch('/:id', (req, res, next) => {
    Profile.findByIdAndUpdate(req.params.id, req.body)
        .then(result => {
            console.log(result);
            res.json(result)
        })
        .catch(error => {
            console.error(error);
        });
})

router.delete('/:id', (req, res, next) => {
    Profile.findByIdAndDelete(req.params.id)
        .then(result => {
            console.log(result);
            res.json(result)
        })
        .catch(error => {
            console.error(error);
        });

})




module.exports = router;