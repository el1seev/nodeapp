const express = require('express');

const { 
        getUser,
        deleteUser,
        editUser,
        getUsers,
        addUser,
    } = require('../controllers/api-user-controller');

const router = express.Router();

// get all users
router.get('/api/users' , getUsers);
// add new user
router.post('/api/user' , addUser);
// get user by Id
router.get('/api/user/:id', getUser);
// delete user by Id
router.delete('/api/users/:id', deleteUser);
// update post by Id
router.put('/api/user/:id', editUser);

module.exports = router;