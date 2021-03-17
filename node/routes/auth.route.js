const router = require('express').Router()
const signup = require('../controllers/auth.controller')
const login = require('../controllers/auth.controller')
const getCurrentUser = require('../controllers/auth.controller')
// const {validateUser} = require('../Middleware/validation');
// const {loginValidation} = require('../Middleware/loginvalidation');
// const auth = require('../middleware/auth')

router.post('/signup',signup.signup)
router.post('/login',login.login)
router.get('/user', getCurrentUser.getCurrentUser)

module.exports = router