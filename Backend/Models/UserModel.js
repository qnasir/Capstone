const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    likedProducts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    }]
})

const user = mongoose.model('user', UserSchema)
module.exports = user