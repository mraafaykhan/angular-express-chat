let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MessagesSchema = new Schema({
    _id : {type: Schema.Types.ObjectId , required:true },
    participants :{
        user1:  {type: Schema.Types.ObjectId , required:true },
        user2 : {type: Schema.Types.ObjectId , required:true }
    },
    messages:[{
        isRecived: { type:Boolean},
        body : {type: String},
        time: {type:Date}
    }]
})
module.exports = mongoose.model("Message", MessagesSchema);