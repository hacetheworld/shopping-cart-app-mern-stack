const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


const checkAuth = require("../middleware/check-auth");
const { loginValidation, registerValidation } = require("../userValidation");



router.post('/register', async (req, res) => {

    //Let's Validate The Data
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    //Check email exist
    const emailExist = await User.findOne({ "email": req.body.email });

    if (emailExist) {
        return res.status(400).jsone({ error: 'Email already exist.' });
    }
    //Hash the passsword
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);



    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });


    try {

        const savedUser = await user.save();
        res.status(201).json({
            user: savedUser._id
        });
    } catch (error) {
        res.status(400).jsone({ error })
    }



});




//Login
router.post('/login', async (req, res) => {

    //Let's Validate The Data
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message })
    }

    //Check email exist
    const user = await User.findOne({ "email": req.body.email });

    if (!user) {
        return res.status(400).json({ error: 'Email or Password was Wrong...' });
    }
    //check the passsword
    const validPass = await bcrypt.compare(req.body.password, user.password);

    if (!validPass) {
        return res.status(400).json({ error: 'Email or Password was Wrong...' });
    }

    //Create and assign Token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

    // res.status(400).send('You are logged in...');

    res.header('auth-token', token).json({ token, messages: 'You are logged in' });

});



router.delete('/:userId', checkAuth, (req, res) => {
    const userId = mongoose.Types.ObjectId(req.params.userId)

    User.deleteOne({ "_id": userId })
        .exec()
        .then(deletedUserStatus => {
            res.status(200).json({
                msg: 'User Deleted Succesfully...',
                deletedUserStatus
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
})



module.exports = router;