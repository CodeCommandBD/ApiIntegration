const { getUsers } = require('../controller/user.controller');

const router = require('express').Router();

// user route
router.get('/', getUsers);

module.exports = router;