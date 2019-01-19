// Server setup
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const api = require('./server/routes/api')

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bankDB', { useNewUrlParser: true })
    .then(() => console.log("DB is connected"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//only in react development mode, remove before production mode 
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use('/', api)




const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})