const { body, param } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const author = require("../model/author");

const createAuthorValidation = [
    body('fname')
    .exists()
    .withMessage('fname is required')
    .bail()
    .notEmpty()
    .withMessage('fname should not be empty')
    .bail()
    .isString()
    .withMessage('fname should be in String')
    .bail(),
    body('lname')
    .exists()
    .withMessage('lname is required')
    .bail()
    .notEmpty()
    .withMessage('lname should not be empty')
    .bail()
    .isString()
    .withMessage('lname should be in String')
    .bail(),
    body('title')
    .exists()
    .withMessage('title is required')
    .bail()
    .notEmpty()
    .withMessage('title should not be empty')
    .bail()
    .isArray()
    .withMessage('title should be in String')
    .bail()
    .custom(value => {
        if (['Mr', 'Mrs', 'Ms'].includes(value)) {
            return true
        }
        return Promise.reject('title should be ["Mr", "Mrs", "Ms"]')
    }),
    body('email')
    .exists()
    .withMessage('email is required')
    .bail()
    .notEmpty()
    .withMessage('email should not be empty')
    .bail()
    .isString()
    .withMessage('email should be in String')
    .bail()
    .isEmail()
    .withMessage('Invalid email')
    .bail('')
    .custom(value => {
        author.findOne({email : value})
        .then(() => {return Promise.reject('email already in use')})
        .catch(() => {return true})
    }),
    body('password')
    .exists()
    .withMessage('password is required')
    .bail()
    .notEmpty()
    .withMessage('password should not be empty')
    .bail()
    .isString()
    .withMessage('password should be in string')
    .bail()
    .isStrongPassword()
    .withMessage('Too easy password')
    .bail(),
    body('isDeleted')
    .default(false)
    .bail()
    .notEmpty()
    .withMessage('isDeleted should not be empty')
    .bail()
    .isBoolean()
    .withMessage('isDeleted should be true/false only')
    .bail()
]

module.exports.createAuthorValidation = createAuthorValidation

const updateAuthorValidation = [
    param('authorId')
    .exists()
    .withMessage('authorId is required')
    .bail()
    .isMongoId()
    .withMessage('Invalid authorId')
    .bail(),
    body('fname')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('fname should not be empty')
    .bail()
    .isString()
    .withMessage('fname should be in String')
    .bail(),
    body('lname')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('lname should not be empty')
    .bail()
    .isString()
    .withMessage('lname should be in String')
    .bail(),
    body('title')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('title should not be empty')
    .bail()
    .isArray()
    .withMessage('title should be in String')
    .bail()
    .custom(value => {
        if (['Mr', 'Mrs', 'Ms'].includes(value)) {
            return true
        }
        return Promise.reject('title should be ["Mr", "Mrs", "Ms"]')
    }),
    body('email')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('email should not be empty')
    .bail()
    .isString()
    .withMessage('email should be in String')
    .bail()
    .isEmail()
    .withMessage('Invalid email')
    .bail('')
    .custom(value => {
        author.findOne({email : value})
        .then(() => {return Promise.reject('email already in use')})
        .catch(() => {return true})
    }),
    body('password')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('password should not be empty')
    .bail()
    .isString()
    .withMessage('password should be in string')
    .bail()
    .isStrongPassword()
    .withMessage('Too easy password')
    .bail()
]

module.exports.updateAuthorValidation = updateAuthorValidation

const getAuthorValidation = [
    param('authorId')
    .exists()
    .withMessage('authorId is required')
    .bail()
    .isMongoId()
    .withMessage('Invalid authorId')
    .bail()
]

module.exports.getAuthorValidation = getAuthorValidation

const deleteAuthorValidation = [
    param('authorId')
    .exists()
    .withMessage('authorId is required')
    .bail()
    .isMongoId()
    .withMessage('Invalid authorId')
    .bail()
]

module.exports.deleteAuthorValidation = deleteAuthorValidation

const loginAuthorValidation = [
    body('email')
    .exists()
    .withMessage('email is required')
    .bail()
    .notEmpty()
    .withMessage('email should not be empty')
    .bail()
    .isString()
    .withMessage('email should be in String')
    .bail()
    .isEmail()
    .withMessage('Invalid email')
    .bail(),
    body('password')
    .exists()
    .withMessage('password is required')
    .bail()
    .notEmpty()
    .withMessage('password should not be empty')
    .bail()
    .isString()
    .withMessage('password should be in string')
    .bail()
]

module.exports.loginAuthorValidation = loginAuthorValidation