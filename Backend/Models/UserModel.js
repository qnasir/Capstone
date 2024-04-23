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
    userSince: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    userImage: {
        type: String,
        required: false
    },
    likedProducts: [{
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        images: [{
            type: String,
            required: true
        }],
        description: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        latitude: {
            type: String,
            required: false
        },
        longitude: {
            type: String,
            required: false
        },
        userId: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: false
        },
        warranty: {
            type: String,
            required: false
        },
        condition: {
            type: String,
            required: false
        },
        category: {
            type: String,
            required: true
        },
        size: {
            type: String,
            required: false
        },
        gender: {
            type: String,
            required: false
        },
        color: {
            type: String,
            required: false
        },
        material: {
            type: String,
            required: false
        },
        isbn: {
            type: String,
            required: false
        },
        edition: {
            type: String,
            required: false
        },
        publisher: {
            type: String,
            required: false
        },
        jobType: {
            type: String,
            required: false
        },
        requirements: {
            type: String,
            required: false
        },
        processor: {
            type: String,
            required: false
        },
        ram: {
            type: String,
            required: false
        },
        storage: {
            type: String,
            required: false
        },
        screenSize: {
            type: String,
            required: false
        },
        os: {
            type: String,
            required: false
        }
    }]
})

const user = mongoose.model('user', UserSchema)
module.exports = user