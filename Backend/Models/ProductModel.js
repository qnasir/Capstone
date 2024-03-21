const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        requires: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    location: {
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
    size: {
        type: Number,
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
    ISBN: {
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