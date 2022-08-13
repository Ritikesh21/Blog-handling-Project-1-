const { StatusCodes } = require("http-status-codes")
const author = require('../model/author')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const createAuthor = async (req, res) => {
    await author.create(req.body)
    .then((value) => {
        if(value){
            return res.status(StatusCodes.CREATED).json({status : true, data : value})
        }
        return res.status(StatusCodes.NOT_ACCEPTABLE).json({status : false, message : "Data not Created"})
    })
    .catch((error) => {
        return res.status(StatusCodes.EXPECTATION_FAILED).json({status : false, message : error.message})
    })
}

module.exports.createAuthor = createAuthor

const getAuthor = async (req, res) => {
    await author.findById(req.params.authorId)
    .then((value) => {
        if(value){
            return res.status(StatusCodes.OK).json({status : true, data : value})
        }
        return res.status(StatusCodes.NOT_FOUND).json({status : false, message : "Data not found"})
    })
    .catch((error) => {
        return res.status(StatusCodes.EXPECTATION_FAILED).json({status : false, message : error.message})
    })
}

module.exports.getAuthor = getAuthor

const updateAuthor = async (req, res) => {
    await author.findByIdAndUpdate(req.params.authorId, req.body, {new : true})
    .then((value) => {
        if(value){
            return res.status(StatusCodes.OK).json({status : true, data : value})
        }
        return res.status(StatusCodes.NOT_FOUND).json({status : false, message : "Data not found"})
    })
    .catch((error) => {
        return res.status(StatusCodes.EXPECTATION_FAILED).json({status : false, message : error.message})
    })
}

module.exports.updateAuthor = updateAuthor

const deleteAuthor = async (req, res) => {
    await author.findByIdAndDelete(req.params.authorId)
    .then((value) => {
        if(value){
            return res.status(StatusCodes.OK).json({status : true, data : value})
        }
        return res.status(StatusCodes.NOT_FOUND).json({status : false, message : "Data not found"})
    })
    .catch((error) => {
        return res.status(StatusCodes.EXPECTATION_FAILED).json({status : false, message : error.message})
    })
}

module.exports.deleteAuthor = deleteAuthor

const loginAuthor = async (req, res) => {
    await author.findOne(req.body)
    .then((value) => {
        if (value){
            const token = jwt.sign({
                _id : value._id
            }, process.env.secret, {expiresIn : '10h'})
            return res.status(StatusCodes.OK).json({status : true, token : token})
        }
        return res.status(StatusCodes.BAD_REQUEST).json({status : false, message : "Data Not Found"})
    })
    .catch((error) => {
        return res.status(StatusCodes.EXPECTATION_FAILED).json({status : false, message : error.message})
    })
}

module.exports.loginAuthor = loginAuthor