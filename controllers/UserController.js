const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {
    static register(req, res, next) {
        const { username, password, email } = req.body
        User.create({ username, password, email })
            .then(user => {
                res.status(200).json({ success: true, data: user })
            })
            .catch(next)
    }

    static login (req, res, next) {
        const { email, password } = req.body
        User.findOne({ email : email })
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign({_id :  user._id}, 'SECRET_KEY')
                res.status(200).send({ success: true, user, token })
            }
                else if(!user) {next({name: 'NOT_FOUND'})}
                else next({name : 'LOGIN_FAILED'})
        })
        .catch(e => {next({name: 'NOT_FOUND'})})
    }
}
module.exports = UserController