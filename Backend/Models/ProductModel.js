const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
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
    offers: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
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
})

const product = mongoose.model('product', ProductSchema)

module.exports = product