const { StatusCodes } = require('http-status-codes')

const defaultFunction = async (req, res) => {
    res.status(StatusCodes.BAD_GATEWAY).json('Default route')
}

module.exports.defaultFunction = defaultFunction