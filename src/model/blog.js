const {Schema, model} = require('mongoose')

const blogSchema = new Schema({
    title: String,
    body: String,
    authorId: String,
    tags: Array,
    category: Array,
    subcategory: Array,
    isDeleted: Boolean,
    publishedAt: Date,
    isPublished: Boolean
},
{
    timestamps : true
})

module.exports = model('blog', blogSchema)