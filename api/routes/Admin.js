const express = require('express');
const router = express.Router();
const Product = require('../models/product')
const User = require('../models/user')
const bcrypt = require('bcryptjs')


const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../Sweet Shop/frontend/sweet-shop/public/products')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

//get admin login

 //create post 
router.post("/",upload.fields([{"name":'image', maxCount:1},{"name": 'images',maxCount:4}]), (req,res) =>{
    const product = new Product({
        name: req.body.name,
        mrp: req.body.mrp,
        sellingPrice:req.body.sellingPrice,
        quantity:req.body.quantity,
        productDetails: req.body.productDetails,
        category: req.body.category,
        adminId: req.body.adminId,
        image: req.files['image'][0]['filename'],
        images: req.files['images'],
        discount: req.body.discount,
        isFeatured: req.body.isFeatured
    })

    const products = product.save();
    if(!products)
    return res.status(400).send('the product cannot be created!')

    res.send(products);
})


module.exports = router