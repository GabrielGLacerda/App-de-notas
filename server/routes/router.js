const express = require('express')
const route = express.Router() 
const control = require('../controller/controller')
const services = require('../services/render')

route.get('/notes-add',services.notesAdd)
route.get('/',services.home)
route.get('/updatepage/:id', services.updatepage)


//api
route.post('/notes', control.create)
route.get('/notes',control.find)
route.post('/updatepage', control.update)
route.get('/delete/:id',control.delete)
// route.delete('/notes/:id', control.delete)

module.exports = route