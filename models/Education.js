const mongoose = require('mongoose')

const EducationSchema = new mongoose.Schema({
    school: String,
    graduate: String,
    accomplishments: String,
    start_date: String,
    end_date: String,
    status: { type: Boolean, default: false }

})

module.exports = mongoose.model('Education', EducationSchema)