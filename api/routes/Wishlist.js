const express = require('express');
const Wishlist = require('../models/wishlist');
const router = express.Router();

//adding to wishlist
router.post('/', async (req, res) =>{
    const wishlist = new Wishlist({
        productId: req.body.productId,
        userId: req.body.userId,
        productName: req.body.productName,
        productQty:req.body.productQty,
        price: req.body.price,
    })  

    const wish = await wishlist.save();
    if(!wish)
    return res.status(400).send('the product not added in the wishlist!')

    res.send(wish);
})

//getting data
router.get('/:id', (req, res) =>{
    Wishlist.find({userId:req.params.id}).exec((err, productDetails) =>{
        if(err || !productDetails){
            return res.status(400).json('none')
        }else{
            return res.status(200).send(productDetails)
        }
    })
})

//delete wishlist product
router.delete("/:id", (req, res) =>{
    Wishlist.findByIdAndDelete(req.params.id).exec((err, result) =>{
        if(err || !result){
            return res.status(400).json('none')
        }else{
            return res.status(200).send("deleted successfully")
        }
    })
})

module.exports = router