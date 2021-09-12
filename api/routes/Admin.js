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

//get admin login
router.post('/login', async (req, res) =>{
  const user = await User.findOne({email: req.body.email});
  if(!user){
      return res.status(200).send({error:'The user not found'})
  }
  if(user.isAdmin !== true){
    res.status(200).send({error: 'user is not admin'})
  }
  if(user && bcrypt.compareSync(req.body.password, user.hashedPassword)){
      res.status(200).send({user:user.email})
  }else{
      res.status(200).send({error:"password is wrong"})
  }

  return res.status(200).send(user)
}),

//delete product
router.delete('/:id', (req,res) =>{
  Product.findByIdAndDelete(req.params.id).exec((err, data) =>{
    if(err){
      res.status(400).send('none');
    }else{
      res.status(200).send(data);
    }
  })
})

 //update post 
 router.put("/update/:id",upload.fields([{"name":'image', maxCount:1},{"name": 'images',maxCount:4}]), async(req,res) =>{


  if(req.files){
    const product = await Product.findByIdAndUpdate(req.params.id,{
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
  },
  {new: true})

  if(!product){
    return res.status(400).send('The product not updated, something went wrong')
  }
  return res.status(200).send(product)
  }

})


module.exports = router