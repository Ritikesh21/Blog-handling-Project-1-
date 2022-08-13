const {validationResult} = require('express-validator')
const { StatusCodes } = require("http-status-codes")

const validationError = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const temp = errors.array({onlyFirstError: true})
      const response = {status : false,
                        Message : temp[0]}
      if(temp[0].msg.includes('already in use')){
        return res.status(StatusCodes.CONFLICT).json(response)
      }
      else if(temp[0].msg.includes('is required')){
        return res.status(StatusCodes.NOT_FOUND).json(response)
      }
      else if(temp[0].msg.includes('should not be empty')){
        return res.status(StatusCodes.NO_CONTENT).json(response)
      }
      else if(temp[0].msg.includes('should be in')){
        return res.status(StatusCodes.METHOD_NOT_ALLOWED).json(response)
      }
      return res.status(StatusCodes.NOT_ACCEPTABLE).json(response)
    }
    next()
}

module.exports.validationError = validationError