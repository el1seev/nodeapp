const express = require('express');
const { getUser,
        deleteUser,
        getEditUser,
        editUser,
        getUsers,
        addUser,
        pageAddUser, 
    } = require('../controllers/user-controllers');

const router = express.Router();

router.get('/users/:id', getUser);
router.delete('/users/:id', deleteUser);
router.get('/edit/:id', getEditUser);
router.put('/edit/:id', editUser);
router.get('/users' , getUsers);
router.post('/adduser' , addUser);
router.get('/adduser' , pageAddUser);
    
router.get('/registration' , (req, res) => {
    res.redirect('/adduser');
    });

module.exports = router;