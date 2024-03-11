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
    }
})

const product = mongoose.model('product', ProductSchema)

module.exports = product