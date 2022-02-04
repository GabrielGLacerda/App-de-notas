const axios = require('axios')
const Notes = require('../model/model')

exports.notesAdd = (req, res) =>{
    res.render('notes-add')   
}

exports.home = (req, res) =>{
    axios.get('http://localhost:3000/notes')
        .then(function(response){
            res.render('home',{notes: response.data})
        })
        .catch(err =>{
            res.send(err)
        })
    
}

exports.updatepage = (req,res) =>{
    Notes.findById(req.id)
        .then(usernote=>{
            res.render('updatepage',{notes: usernote})
        })
        .catch(err=>{
            res.send(err)
        })
}

// Notes.findById(req.id)
// .then(usernote=>{
//     res.render('updatepage',{notes: usernote})
// })
// .catch(err=>{
//     res.send(err)
// })