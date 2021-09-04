const express = require('express')
const router = express.Router();
const Product = require("../models/product")


router.post("/", async (req, res) =>{
    const product = new Product({
        name: req.body.name,
        mrp: req.body.mrp,
        sellingPrice:req.body.sellingPrice,
        quantity:req.body.quantity,
        productDetails: req.body.productDetails,
        category: req.body.category,
        adminId: req.body.adminId,
        image: req.body.image,
        images: req.body.images,
        discount: req.body.discount,
        isFeatured: req.body.isFeatured
    })

    const products = await product.save();
    if(!products)
    return res.status(400).send('the product cannot be created!')

    res.send(products);
})

router.get(`/`, async (req, res) =>{
    const product = await Product.find().populate('category productDetails');

    if(!product) {
        res.status(500).json({success: false})
    } 
   
    res.send(product);
})

//getting product data with id
router.get(`/:id`,(req, res) =>{
    Product.findById(req.params.id).populate('category productDetails').exec((err, product) =>{
        if(err || !product){
            return res.status(400).json('none')
        }else{
            return res.status(200).json(product)
        }
    })
})


module.exports = router