const { register, login, profile } = require('../controller/user.controller')

const passport = require('passport')

const router = require('express').Router()



router.post('/register', register)
router.post('/login', login)
router.get('/profile', passport.authenticate('jwt', { session: false }), profile)

module.exports = router