const router = require("express").Router();



router.post('/about', (req, res) =>{
    res.send("About Page")
    res.end()
})






module.exports = router;
