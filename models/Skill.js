const mongoose = require('mongoose')

const SkillSchema = new mongoose.Schema({
    name: String,
    dateUpdated: { type: Date, default: Date.now },

})

module.exports = mongoose.model('Skill', SkillSchema)