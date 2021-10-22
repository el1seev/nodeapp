const User = require('../models/user');

const handleError = (res , error) => {
    res.status(500).send(error.message);
};

const getUser = (req ,res) => {
    User
     .findById(req.params.id)
     .then((user) => res.status(200).json(user))
     .catch((error) => handleError(res ,error));
};

const deleteUser = (req,res) => {
    User
     .findByIdAndDelete(req.params.id)
     .then(() => res.status(200).json(req.params.id))
     .catch((error) => handleError(res ,error));
};

const editUser = (req ,res) => {
    const { username , firstName , secondName , age} = req.body;
    const {id} = req.params;
    User
     .findByIdAndUpdate(id , { username , firstName , secondName , age} , {new: true})
     .then((user) => res.status(200).json(user))
     .catch((error) => handleError(res ,error));
};

const getUsers = (req ,res) => {
    User
     .find()
     .sort({createdAt: -1})
     .then((users) => res.status(200).json(users))
     .catch((error) => handleError(res ,error));
};

const addUser = (req ,res) => {
    const { username , firstName , secondName , age} = req.body;
    const user = new User({ username, firstName, secondName , age});
    user
    .save()
    .then((user) => res.status(200).json(user))
    .catch((error) => handleError(res ,error));
};

module.exports = {
    getUser,
    deleteUser,
    editUser,
    getUsers,
    addUser,
};