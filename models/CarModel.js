var mongoose=require('mongoose');

var CarSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        default:1000
    },
    owner:{
        type:String,
        ref:"User"
    }
},{collection:'car'});

module.exports=mongoose.model('Car',CarSchema);

