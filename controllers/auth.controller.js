let router = require("express").Router();
let User = require('../models/user');
let passport = require('passport');
let jwt = require('jsonwebtoken');



// Todos:
// 1.add route for admin approval of users when scaling,
// create admin users for administration :P 


router.post('/register', function(req,res){
    if(!req.body.password || !req.body.email){
        res.json({
            message: 'please enter password / email',
            success:false
        })
        return;
    } 
    let user= new User({
        email:req.body.email,
        password: req.body.password,
        isApproved:true
    })
    user.save(function(err){
        if(err){
            console.log("error Error!");
            res.json({
                success:false,
                messsage:"sum ting wong! "+ err || " "
            })
            return;
        }
        res.json({
            sucess:true,
            messsage:"user sucessfully created"
        })
    })


// password update case
router.patch('/register', function(req,res){
    if(!req.body.password || !req.body.email){
        res.json({
            message:'please enter a password / email',
            success:false
        })
        return;
    }
    User.findOneAndUpdate({
        email:req.body.email
    }, function(err, u){
    if(err || !u){
        res.json({
            message: "An Error occured :'(" + err || " ",
            success:false
        })
        return;
    }
    u.password = req.body.password;
    u.save(function(err){
        if(err){
            res.json({
                message:"dearly sorry bro, an occured has occured " + err || " ",
                success:false
            })
            return;

        }
        res.json({
            message: 'password succesfully updated',
            success:true
        })
    })
    })
})

    router.post('/login', function(req,res){
        if(!req.body.email || !req.body.password){
            res.json({
                success:false,
                message:'please enter email / password'
            })
        }
        user.findOne({
            email:req.body.email
        } , function(err, u){
            if(err || !u){
                res.json({
                    message:'No user found ' + err|| " ",
                    success:false

                })
                return;

            }
            user.comparePassword(req.body.password, function(err,isMatch){
                if(!err && isMatch){
                    let token = jwt.sign(user.toObject(), 'darkiskey1111!!!', {
                        expiresIn:'3 days'
                    })
                    res.json({
                        message:"login successful",
                        success:true,
                        token : token
                    })
                } else if(!isMatch){
                    res.json({
                        message: 'the password you entered is incorrect ' + err || " " ,
                        success:false
                    })
                }
            })
        })
    })
})
module.exports = router;