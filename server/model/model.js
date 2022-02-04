const mongoose = require('mongoose')

let notesSchema = new mongoose.Schema({
    title: String,
    text: String
})

const Notes = mongoose.model('Notes', notesSchema)

module.exports = Notes