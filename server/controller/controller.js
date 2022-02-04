const Notes = require('../model/model')

exports.create = (req, res, next) =>{
    console.log(req.body)
    const note = new Notes({
        title: req.body.title,
        text: req.body.text 
    })
    
    note
        .save(note)
        .then(data =>{
            res.redirect('/')
        })
        .catch(err =>{
            res.status(500).send({message:"erro inesperado ocorreu ao salvar a nota"})
        })
}

exports.find = (req,res,next) =>{
     Notes
        .find({})
        .then(data =>{
            if(!data){
                res.status(400).send({message: `nota não encontrada com o respectivo ${id}`})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message: `Ocorreu um erro enquanto buscava pela nota`})
        })

}

exports.delete = (req,res)=>{

    Notes.findByIdAndDelete(req.params.id)
        .then(data =>{
            if(!data){
                res.status(404).send({message: `Não foi possivel deletar com o seguinte id ${id}. Por favor, confira se o id esta correto`})
            }else{
                // res.send({message: 'Nota deletada com sucesso'})
                res.redirect('/')
            }
        })
        .catch(err=>{
            res.status(500).send({message: `Não foi possivel deletar a nota com o id ${id}`})
        })    
}

exports.update = (req,res) =>{
    
    Notes.findByIdAndUpdate(
        req.id,
        {title: req.body.title, text: req.body.text}, 
        {useFindAndModify: false}
        )
        .then(data=>{
            if(!data){
                res.status(400).send({message: `Não foi possivel atualizar o seguinte id ${req.id}. Por favor, confira se o id esta correto`})
            }else{
                res.redirect('/')  
            }
        })
        .catch(err=>{
            res.status(500).send({message: `Não foi possivel atualizar a nota com o id ${id}`})
        })
          
}
