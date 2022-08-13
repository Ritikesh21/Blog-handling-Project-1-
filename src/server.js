const express = require('express')
const app = express()
const {connect} = require('mongoose')
const dotenv = require('dotenv')
const route = require('./routes/route')
dotenv.config()

const multer = require('multer')
app.use(multer().any())

app.use('/', route)
app.use(express.json())

connect(process.env.DbString)
.then(app.listen(process.env.port || 4000, () => {
    console.log('Connected to port ' + (process.env.port || 4000))
}))
.catch((error) => {
    console.log(error.message)
})