const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
      type: String,
      required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    secondName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
}, {timestamps:true});

const User = mongoose.model('User' , userSchema);

module.exports = User;