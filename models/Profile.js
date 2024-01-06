const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    phoneNumber: String,
    address: String,
    dateUpdated: { type: Date, default: Date.now },
    summaryDetail: String,
    picturePath: String,
    education: Array,
    skill: Array,
    experience: Array
})

module.exports = mongoose.model('Profile', ProfileSchema)