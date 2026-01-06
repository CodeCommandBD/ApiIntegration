const { route } = require('../app');
const { getAllUsers, getOneUsers, createUser, deleteUser, updateUsers } = require('../controller/user.controller');

const router = require('express').Router();

// Alluser route
router.get('/', getAllUsers);

// one user route
router.get('/:id', getOneUsers);

// create user route
router.post('/', createUser);

// update user route
router.put('/:id', updateUsers);

// delete user route
router.delete('/:id', deleteUser);


module.exports = router;