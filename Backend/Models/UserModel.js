const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
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