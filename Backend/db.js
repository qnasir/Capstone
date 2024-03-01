const mongoose = require('mongoose')
require('dotenv').config()

const connecDb = async () => {
    try {
        mongoose.connect(process.env.Mongo_URI)
    } catch (error) {
        console.log("Connection failed")
        process.exit(0)
    }
}

module.exports = connecDb