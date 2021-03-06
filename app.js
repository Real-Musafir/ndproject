const express = require('express')
const morgan = require('morgan')
const contactRoutes = require('./contactRoutes')

const app = express()

app.set('view engine', 'ejs')

app.use(morgan('dev'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/contacts', contactRoutes)

app.get('*', (req, res)=>{
    res.send('<h1>Please Use The Correct Routes </h1> ')
})

const PORT = 8000
app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ${PORT}`)
})