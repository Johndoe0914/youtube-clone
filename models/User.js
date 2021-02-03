const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    channelId: {
        type: Number
    },
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
    date: {
        type: Date,
        default: Date.now
    },
    videos: [
        {
            type: Array,
            
        }
    ],
    description: {
        type: String
    }

})

module.exports = User = mongoose.model('user', UserSchema);