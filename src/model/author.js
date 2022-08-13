const {Schema, model} = require('mongoose')

const authorSchema = new Schema({
    fname: String,
    lname: String,
    title: String,
    email: String,
    password: String,
    isDeleted: Boolean
})

module.exports = model('author', authorSchema)