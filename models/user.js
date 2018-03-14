let mongoose = require("mongoose");
let bcrypt= require('bcrypt');
let schema = mongoose.Schema;

var userSchema = new schema({
    email:{
        type: String,
        lowercase:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isApproved: {
        type: Boolean,
        default:true
    }
})

userSchema.pre('save', function(next){
    let user = this;
    if(this.isModified('password') || this.isNew){
        bcrypt.hash(user.password, salt, function(err,hash){
            if(err){
                return next(err)
            }
            user.password = hash;
            next();
        })
    } else{
        return next()
    }
})

userSchema.methods.comparePassword = function(pwd,cb){
    bcrypt.compare(pwd, this.password, function(err,isMatch){
        if(err){
            return cb (err)
        }
        else{
            cb(null,isMatch)
        }
    })
}

mongoose.exports = mongoose.model('user',userSchema);