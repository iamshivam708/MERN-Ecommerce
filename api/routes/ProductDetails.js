const express = require('express')
const router = express.Router();
const ProductDetails = require("../models/productdetails")

router.post("/", async (req, res) =>{
    const productDetail = new ProductDetails({
        productId:req.body.productId,
        keyFeatures: req.body.keyFeatures,
        seller: req.body.seller,
        description: req.body.description,
        manufacturingDetails: req.body.manufacturingDetails
    })
    productDetails = await productDetail.save();
    if(!productDetails)
    return res.status(400).send('the productDetails cannot be created!')

    res.send(productDetails);
})

router.get(`/`, async (req, res) =>{
    const productDetails = await ProductDetails.find();

    if(!productDetails) {
        res.status(500).json('none')
    } 
   
    res.send(productDetails);
})

router.get(`/:id`,(req, res) =>{
    ProductDetails.findById(req.params.id).exec((err, productDetails) =>{
        if(err || !productDetails){
            return res.status(400).json('none')
        }else{
            return res.status(200).send(productDetails)
        }
    })
})

module.exports = router