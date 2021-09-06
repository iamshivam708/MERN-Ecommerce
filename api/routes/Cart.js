const express = require('express');
const Cart = require('../models/cart');
const router = express.Router();

//adding to cart
router.post('/', async (req, res) =>{
    const cart = new Cart({
        productId: req.body.productId,
        userId: req.body.userId,
        productName: req.body.productName,
        productQty:req.body.productQty,
        qty: 1,
        price: req.body.price,
        totalPrice: req.body.qty * req.body.price
    })  

    const carts = await cart.save();
    if(!cart)
    return res.status(400).send('the product not added in the cart!')

    res.send(carts);
})

//getting data
router.get('/:userId', (req, res) =>{
    Cart.find({userId:req.params.userId}).exec((err, productDetails) =>{
        if(err || !productDetails){
            return res.status(400).json('none')
        }else{
            return res.status(200).send(productDetails)
        }
    })
})

//updating product qty
router.put('/update/:id', async (req, res) =>{
    const cart = await Cart.findByIdAndUpdate(req.params.id, {
        qty: req.body.qty,
        price: req.body.price,
        totalPrice: req.body.qty * req.body.price
    },
    {new: true})

    if(!cart){
        return res.status(400).send('The user not updated, something went wrong')
    }
    return res.status(200).send(cart)
})

//getting count of data
router.get('/count/:userId', (req, res) =>{
    Cart.count({userId: req.params.userId}, function(err, count){
        if(err || !count){
            return res.status(200).json({"count": count})
        }else{
            return res.status(200).send({"count":count})
        }
    });
})

//delete cart product
router.delete("/:id", (req, res) =>{
    Cart.findByIdAndDelete(req.params.id).exec((err, result) =>{
        if(err || !result){
            return res.status(400).json('none')
        }else{
            return res.status(200).send("deleted successfully")
        }
    })
})


//getting data through product id
router.get('/product/:id', (req,res) =>{
    Cart.count({productId: req.params.id}, function(err, count){
        if(err || !count){
            return res.status(200).json({"count": count})
        }else{
            return res.status(200).send({"count":count})
        }
    });
})

module.exports = router