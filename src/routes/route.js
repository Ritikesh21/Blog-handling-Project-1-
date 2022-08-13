const express = require('express')
const { createAuthor, getAuthor, updateAuthor, deleteAuthor, loginAuthor } = require('../controller/author')
const { createBlog, getBlog } = require('../controller/blog')
const { defaultFunction } = require('../controller/default')
const { authentication } = require('../middleware/auth')
const { validationError } = require('../middleware/errorhandling')
const { update } = require('../model/blog')
const { createAuthorValidation, loginAuthorValidation, updateAuthorValidation, getAuthorValidation, deleteAuthorValidation } = require('../validation/author')
const { createBlogValidation, getBlogValidation } = require('../validation/blog')
const router = express.Router()

//author
router.post('/create/author', createAuthorValidation, validationError, createAuthor)
router.put('/update/:authorId/author', updateAuthorValidation, validationError, authentication, updateAuthor)
router.get('/get/:authorId/author', getAuthorValidation, validationError, authentication, getAuthor)
router.delete('/delete/:authorId/author', deleteAuthorValidation, validationError, authentication, deleteAuthor)
router.post('/login/author', loginAuthorValidation, validationError, loginAuthor)

//blog
router.post('/create/blog', createBlogValidation, validationError, createBlog)
router.get('/get/blogs', getBlogValidation, validationError, getBlog)
router.put('/update/:authorId')

// default
router.get('/*', defaultFunction)

module.exports = router