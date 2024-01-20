const { verify } = require('jsonwebtoken') // import jsonwebtoken
require('dotenv').config(); // import env

exports.isAuthenticated = (req, res, next) => {
    const authToken = req.headers.authorization

    const [, token] = authToken.split(' ')

    try{
        const { sub } = verify(token, process.env.JWT_SECRET)
        req.userId = sub
        return next()
    } catch (err){
        return res.status(401).end()
    }
}