const mongoose = require('mongoose')

const connectdb = async (req, res) =>{
    try{
         await mongoose.connect(process.env.DB_URL)

        console.log('Database connected')
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectdb