const express = require('express')
const router = express.Router()
const Product = require('../Models/ProductModel')

router.get('/', async (req,res) => {
    try{
        const products = await Product.find({})
        res.json(products)
    } catch(err) {
        console.error(err)
    }
})

router.post('/post', async (req,res) => {

    const product = new Product({
        name: req.body.name,
        title: req.body.title,
        price: req.body.price,
        location: req.body.location,
        image: req.body.image
    })

    try {
        const product1 = await product.save()
        res.json(product1)
    } catch (err) {
        console.error(err)
    }
})

module.exports = router