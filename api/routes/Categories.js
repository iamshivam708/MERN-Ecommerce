const express = require('express');
const Category = require('../models/category');
const router = express.Router();

router.post("/", async (req, res) =>{
    const category = new Category({
        name:req.body.name
    })
    categories = await category.save();
    if(!categories)
    return res.status(400).send('the category cannot be created!')

    res.send(categories);
})

router.get(`/`, async (req, res) =>{
    const categories = await Category.find();

    if(!categories) {
        res.status(500).json({success: false})
    } 
   
    res.send(categories);
})

router.get("/:id", (req, res) =>{
    Category.findById(req.params.id).exec((err, category) =>{
        if(err){
            res.status(400).send(err)
        }else{
            res.status(200).send(category)
        }
    })
})

router.put('/update/:id', (req, res) =>{
    Category.findByIdAndUpdate(req.params.id,{
        name: req.body.name
    }).exec((err, result) =>{
        if(err){
            res.status(400).send(err)
        }else{
            res.status(200).send('category updated')
        }
    })
})

router.delete("/:id", (req,res) =>{
    Category.findByIdAndDelete(req.params.id).exec((err, result) =>{
        if(err){
            res.status(400).send(err)
        }else{
            res.status(200).send('category deleted')
        }
    })
})

module.exports = router