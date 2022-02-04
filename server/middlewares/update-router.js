const Router = require('express').Router()

let id = 0;

Router.get('/:id', (req, res, next)=>{
    id = req.id = req.params.id;
    next();
})

Router.post('/', (req, res, next)=>{
    req.id = id
    next()
})

module.exports = Router;