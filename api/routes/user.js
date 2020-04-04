const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


const checkAuth = require("../middleware/check-auth");




router.post('/signup', (req, res) => {
    const saltRounds = 10;
    const myPlaintextPassword = req.body.password;
    //Hash the password
    bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
        if (err) {
            res.status(500).json({
                error: err
            });
        } else {
            const user = new User({
                email: req.body.email,
                password: hash
            });

            user.save()
                .then(userData => {
                    res.status(201).json({
                        message: 'User Created Succesfully...',
                        userData
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    })
                })
        }
    });
});




//Login
router.post('/login', (req, res) => {

    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(404).json({
                    message: 'Auth Failed'
                });
            }

            bcrypt.compare(req.body.password, user[0].password, (err, resPassCompare) => {
                if (!resPassCompare || err) {
                    return res.status(401).json({
                        message: 'Auth Failed'
                    });
                }

                if (resPassCompare) {
                    //Create and assign Token
                    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
                    // res.status(400).send('You are logged in...');

                    res.header('auth-token', token).json({ message: 'You are Logged In...', token });

                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })



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