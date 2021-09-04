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

module.exports = router