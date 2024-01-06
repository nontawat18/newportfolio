const mongoose = require('mongoose')

const ExperienceSchema = new mongoose.Schema({
    company: String,
    position: String,
    company: String,
    accomplishments: String,
    start_date: String,
    end_date: String,
    status: { type: Boolean, default: false }

})

module.exports = mongoose.model('Experience', ExperienceSchema)