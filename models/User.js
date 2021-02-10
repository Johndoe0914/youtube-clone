const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },

    videos: [
        {
            type: Array,
            
        }
    ],

})

module.exports = User = mongoose.model('user', UserSchema);