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

// Get route to fetch products by search
router.get('/search', async (req,res) => {
    let search = req.query.search;

    try {
        const products = await Product.find({
            $or: [
                { name: { $regex: new RegExp(search, 'i') } },
                { title: { $regex: new RegExp(search, 'i') } }
            ]
        })
        res.json(products)
    } catch (err) {
        console.error(err)
    }
})

// Get route to fetch products by category
router.get('/category', async (req, res) => {
    const query = req.query.category

    try {
        if ( query === "All Categories") {
            const products = await Product.find({})
            res.json(products)
        } else {
            const products = await Product.find({category: query})
            res.json(products)
        }
        
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
        category: req.body.category,
        images: req.body.images,
        brand: req.body.brand,
        warranty: req.body.warranty,
        condition: req.body.condition,
        size: req.body.size,
        gender: req.body.gender,
        color: req.body.color,
        material: req.body.material,
        isbn: req.body.isbn,
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
        const savedProduct = await product.save()
        res.json(savedProduct)
    } catch (err) {
        console.error(err)
    }
})

module.exports = router