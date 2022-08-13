const { StatusCodes } = require("http-status-codes")
const blog = require('../model/blog')

const createBlog = async (req, res) => {
    await blog.create(req.body)
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

module.exports.createBlog = createBlog

const getBlog = async (req, res) => {
    await blog.find({isDeleted : false})
    .then((value) => {
        if(value){
            const {authorId, category, tags, subcategory} = req.body
            value = value.filter((item) => {
            if ((authorId && authorId == item.authorId) ||
            (category && category == item.category) ||
            (tags && tags == item.tags) ||
            (subcategory && subcategory == item.subcategory)){
                return true
            }
            return false
            })
            return res.status(StatusCodes.OK).json({status : true, data : value})
        }
        return res.status(StatusCodes.NOT_FOUND).json({status : false, message : "Data not found"})
        
    })
    .catch((error) => {
        return res.status(StatusCodes.EXPECTATION_FAILED).json({status : false, message : error.message})
    })
}

module.exports.getBlog = getBlog

const updateBlog = async (req, res) => {
    await blog.findByIdAndUpdate(req.params.blogId, req.body, {new : true})
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

module.exports.updateBlog = updateBlog

const deleteBlog = async (req, res) => {
    await blog.findByIdAndDelete(req.params.blogId)
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

module.exports.deleteBlog = deleteBlog