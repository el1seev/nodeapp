const User = require('../models/user');
const createPath = require('../helpers/create-path');

const handleError = (res , error) => {
    console.log(error);
    res.render(createPath('error') , {title: 'Error' });
};

const getUser = (req ,res) => {
    const title = 'User';
    User
     .findById(req.params.id)
     .then((user) => res.render(createPath('user'), {user, title}))
     .catch((error) => handleError(res ,error));
};

const deleteUser = (req,res) => {
    const title = 'User';
    User
     .findByIdAndDelete(req.params.id)
     .then((result) => {
        res.sendStatus(200);
     })
     .catch((error) => handleError(res ,error));
};

const getEditUser = (req ,res) => {
    const title = 'Edit User';
    User
     .findById(req.params.id)
     .then((user) => res.render(createPath('edituser'), {user, title}))
     .catch((error) => handleError(res ,error));
};

const editUser = (req ,res) => {
    const { username , firstName , secondName , age} = req.body;
    const {id} = req.params;
    User
     .findByIdAndUpdate(id , { username , firstName , secondName , age})
     .then(result => res.redirect(`/users/${id}`))
     .catch((error) => handleError(res ,error));
};

const getUsers = (req ,res) => {
    const title = 'Users';
    User
     .find()
     .sort({createdAt: -1})
     .then((users) => res.render(createPath('users'), {users, title}))
     .catch((error) => handleError(res ,error));
};

const addUser = (req ,res) => {
    const { username , firstName , secondName , age} = req.body;
    const user = new User({ username, firstName, secondName , age});
    user
    .save()
    .then((result) => res.redirect('/users'))
    .catch((error) => handleError(res ,error));
};

const pageAddUser = (req ,res) => {
    const title = 'Registration';
    res.render(createPath('adduser') , {title});
};

module.exports = {
    getUser,
    deleteUser,
    getEditUser,
    editUser,
    getUsers,
    addUser,
    pageAddUser,
};