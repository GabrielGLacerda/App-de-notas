const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const connectdb = require('./server/database/connection')
const updateRouter = require('./server/middlewares/update-router')
const routePath = require('./server/routes/router')


const app = express()


dotenv.config( { path : 'config.env'} )

//connect database
connectdb()

//handle json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// dotenv.config({ path : 'config.env' })

//set view engine
app.set('view engine', 'ejs')

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
// app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
//  app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// middleware that will handle the update page
 app.use('/updatepage',updateRouter)
app.use((req,res,next)=>{
    console.log(`${req.method}:${req.url}`)
    next()
})

//load routes
app.use('/', routePath)

app.listen(3000, (req,res) =>{
    console.log('server is running on http://localhost:3000')
})