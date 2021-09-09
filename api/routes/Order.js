const express = require('express');
const Order = require('../models/order');
const router = express.Router();

router.post("/", (req, res) =>{
    const order = [{
        userId: req.body.userId,
        productName: req.body.productName,
        productQty: req.body.productQty,
        qty: req.body.qty,
        price: req.body.price,
        totalPrice: req.body.totalPrice,
        status:'false'
    }]

    Order.insertMany(order, function(err, docs){
        if(err){
            res.status(400).send(err);
        }else{
            res.send(docs);
        }
    })
})

router.get('/:id', (req, res) =>{
    Order.find({userId:req.params.id, status:'false'}).exec((err, order) =>{
        if(err || !order){
            return res.status(400).json('none')
        }else{
            return res.status(200).send(order)
        }
    })
})

router.get('/status/:id', (req, res) =>{
    Order.find({userId:req.params.id, status:'true'}).exec((err, order) =>{
        if(err || !order){
            return res.status(400).json('none')
        }else{
            return res.status(200).send(order)
        }
    })
})


module.exports = router