const express = require('express')
const router = express.Router()
const Product = require('../Models/ProductModel')

// Route to fetch all data
router.get('/', async (req,res) => {
    try{
        const products = await Product.find({})
        res.json(products)
    } catch(err) {
        console.error(err)
    }
})

// Find the product by productId
router.get('/product/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;

        const foundProduct = await Product.findById(productId);

        if (!foundProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(foundProduct);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});


router.post('/post', async (req,res) => {

    const product = new Product({
        name: req.body.name,
        title: req.body.title,
        price: req.body.price,
        location: req.body.location,
        description: req.body.description,
        image: req.body.image,
        brand: req.body.brand,
        warranty: req.body.warranty,
        condition: req.body.condition,
        size: req.body.size,
        gender: req.body.gender,
        color: req.body.color,
        material: req.body.material,
        ISBN: req.body.ISBN,
        edition: req.body.edition,
        publisher: req.body.publisher,
        jobType: req.body.jobType,
        requirements: req.body.requirements,
        processor: req.body.processor,
        ram: req.body.ram,
        storage: req.body.storage,
        screenSize: req.body.screenSize,
        os: req.body.os
    })

    try {
        const product1 = await product.save()
        res.json(product1)
    } catch (err) {
        console.error(err)
    }
})

module.exports = router