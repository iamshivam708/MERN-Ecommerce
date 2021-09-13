const express = require('express')
const router = express.Router();
const ProductDetails = require("../models/productdetails")
const Review = require('../models/review')

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

router.delete("/:id", (req,res) =>{
    ProductDetails.findByIdAndDelete(req.params.id).exec((err, result) =>{
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send("product deleted");
        }
    })
})

router.put("/update/:id", (req, res) =>{
    ProductDetails.findByIdAndUpdate(req.params.id,{
        productId: req.body.productId,
        keyFeatures: req.body.keyFeatures,
        seller: req.body.seller,
        description: req.body.description,
        manufacturingDetails: req.body.manufacturingDetails
    }).exec((err, result) =>{
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send(result);
        }
    })
})


router.post(`/try/:id`,(req, res) =>{
    ProductDetails.findById(req.params.id).exec((err, productDetails) =>{

        ProductDetails.findByIdAndUpdate(req.params.id,{
            productId: req.body.productId || productDetails.productId,
            keyFeatures: req.body.keyFeatures || productDetails.keyFeatures,
            seller: req.body.seller || productDetails.seller,
            description: req.body.description || productDetails.description,
            manufacturingDetails: req.body.manufacturingDetails || productDetails.manufacturingDetails
        }).exec((err, result) =>{
            if(err){
                res.status(400).send(err);
            }else{
                res.status(200).send(result);
            }
        })
    })
})


//adding review
router.post("/review", async (req,res) =>{
        const review = new Review({
            productId: req.body.productId,
            userId: req.body.userId,
            userName: req.body.userName,
            review: req.body.review,
            stars: req.body.stars
        })

        const data = await review.save();
        if(!data)
        return res.status(400).send('the review cannot be created!')

    res.send(data);
})

//getting all reviews for particular product
router.get("/review/:id", (req,res) =>{
    Review.find({productId: req.params.id}).exec((err, data)=>{
        if(err || !data){
            res.status(400).send('none');
        }else{
            res.status(200).send(data);
        }
    })
})


module.exports = router