const router = require("express").Router();

// register route get
router.get('/register', (req, res) => {
    res.send('Register')
})




// login route get
router.get('/login', (req, res) => {
    res.send('Login')
})


module.exports = router;