var mongoose=require("mongoose");

var UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true  //Yêu cầu không được để trống
    },
    password:{
        type:String,
        required:true
    }
},{collection:"user"});

module.exports=mongoose.model('User',UserSchema);
