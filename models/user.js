let mongoose = require("mongoose");
let bcrypt= require('bcrypt');
let Schema = mongoose.Schema;

var UserSchema = new Schema({
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

UserSchema.pre('save', function(next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, function(err, salt) {
        if (err) {
          return next(err);
        }
        bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) {
            return next(err);
          }
          user.password = hash;
          next();
        });
      });
    } else {
      return next();
    }
  });

UserSchema.methods.comparePassword = function(pwd,cb){
    bcrypt.compare(pwd, this.password, function(err,isMatch){
        if(err){
            return cb (err)
        }
        else{
            cb(null,isMatch)
        }
    })
}

module.exports = mongoose.model('User',UserSchema);