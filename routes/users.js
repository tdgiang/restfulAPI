var express = require('express');
var router = express.Router();
var User =require('../models/UserModel');

var Car =require('../models/CarModel');
/* GET users listing. */
router.get('/', function(req, res, next) {
   User.find({}).exec()
   .then(data=>res.json({
      message:"success",
      data,
      cout:data.length
   }))
   .catch(err=>{
     res.json({
       message:err,
       data:[]
     })
   })
});


router.get('/:id', function(req, res, next) {
  User.findOne({_id:req.params.id}).exec()
   .then(data=>res.json({
      message:"success",
      data,
   }))
   .catch(err=>{
     res.json({
       message:err,
       data:{}
     })
   })
});


router.post('/', function(req, res, next) {
  let newUser=new User({
    name:req.body.name,
    password:req.body.password
  });
  newUser.save()
  .then(data=>res.json({
    message:"success",
    data
  }     
  ))
  .catch(err=>res.json({
    message:err
  }))



});
router.put('/:id', function(req, res, next) {
  User.updateOne({_id:req.params.id},{name:req.body.name,password:req.body.password})
  .then(data=>res.json({
    message:"seccess",
    data
  })
  ).catch(err=>res.json(
    err
  ))

});
router.delete('/:id', function(req, res, next) {
  User.deleteOne({_id:req.params.id})
  .then(result=>res.json(result))
  .catch(err=>res.json(err))
});

router.get('/:id/cars', function(req, res, next) {
  Car.find({owner:req.params.id}).exec()
   .then(data=>res.json({
      message:"success",
      data,
   }))
   .catch(err=>{
     res.json({
       message:err,
       data:{}
     })
   })
});
 

module.exports = router;
