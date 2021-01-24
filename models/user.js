const mongo =require('mongoose');
const user_schema =mongo.Schema({
    user_id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const user = mongo.model('users', user_schema);
module.exports = user;