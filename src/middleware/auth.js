const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config()

const authentication = async (req, res) => {
    if (req.params.userId != jwt.verify(req.headers['authorization'].split(' ')[1], process.env.secret, (err) => {
        if(Object.keys(err).length){
            return res.status(StatusCodes.UNAUTHORIZED).json(err)
        }
    })){
        next()
    }
}

module.exports.authentication = authentication