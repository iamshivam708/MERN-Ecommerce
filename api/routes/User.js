const express = require('express')
const router = express.Router();
const User = require('../models/user')
const bcrypt = require("bcryptjs");
const Review = require('../models/review')

//add user
router.post('/signup', async (req, res) =>{
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        houseNo: req.body.houseNo,
        locality: req.body.locality,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        hashedPassword: bcrypt.hashSync(req.body.hashedPassword, 10),
        isAdmin:'false'
    })
    users = await user.save()

    if(!users)
    return res.status(400).send('the user cannot be created!')

    res.send(users);
})


//login user
router.post('/login', async (req, res) =>{
    const user = await User.findOne({email: req.body.email, password: req.body.password});
    if(!user){
        return res.status(200).send({error:'The user not found'})
    }
    if(user && bcrypt.compareSync(req.body.password, user.hashedPassword)){
        res.status(200).send({user:user.email})
    }else{
        res.status(200).send({error:"password is wrong"})
    }

    return res.status(200).send(user)
})


//get single user
router.get('/:id', async (req, res) =>{
    const user = await User.findById(req.params.id).select('-hashedPassword')
    if(!user){
        return res.status(200).send({error:'The user not found'})
    }
    return res.status(200).send(user)
})


//getting user details with email
router.get('/details/:email', async (req, res) =>{
    const user = await User.findOne({email:req.params.email}).select('-hashedPassword')
    if(!user){
        return res.status(200).send({error:'The user not found'})
    }
    return res.status(200).send(user)
})

//update the user
router.put('/update/:id', async (req,res) =>{
    const user = await User.findByIdAndUpdate(req.params.id,{
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        houseNo: req.body.houseNo,
        locality: req.body.locality,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
    })

    if(!user){
        return res.status(200).send('The user not updated, something went wrong')
    }
    return res.status(200).send(user)
})

//deleting user
router.delete("/:id", async (req, res) =>{
    const user = await User.findByIdAndDelete(req.params.id);
    
    if(!user){
        return res.status(200).send('The user not updated, something went wrong')
    }
    return res.status(200).send(user)
})

//getting reviews of particular user
router.get("/review/:id", (req,res) =>{
    Review.find({userId: req.params.id}).exec((err, data) =>{
        if(err || !data){
            res.status(400).send('none');
        }else{
            res.status(200).send(data);
        }
    })
})


module.exports = router