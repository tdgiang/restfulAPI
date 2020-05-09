var express = require('express');
var router = express.Router();
var Car=require('../models/CarModel');
/* GET home page. */
router.get('/', function(req, res, next) {
    Car.find({})
    .populate('owner')
    .then(data=>res.json({
        message:'Success',
        data:data,
        count:data.length
    }))
    .catch(err=>res.json({
        message:"fail",
        err
    }))
    
});
router.get('/:id', function(req, res, next) {
   Car.findOne({_id:req.params.id})
   .populate('owner')
   .then(data=>res.json({
       message:"success",
       data
   }))
   .catch(err=>res.json(err))

});
router.post('/', function(req, res, next) {
  var carNew=new Car({
      name:req.body.name,
      price:req.body.price,
      owner:req.body.owner
  })
  carNew.save()
  .then(data=>res.json({
      message:"success",
      data
  }))
  .catch(err=>res.json({
        message:'fail',
        err
    }))



});
router.put('/:id', function(req, res, next) {
    Car.updateOne({_id:req.params.id},{name:req.body.name,price:req.body.price,owner:req.body.owner})
    .then(result=>res.json({
        message:"success",
        result
    }))
    .catch(err=>res.json({
        message:'fail',
        err
    }))
});
router.delete('/:id', function(req, res, next) {
  Car.deleteOne({_id:req.params.id})
  .then(result=>res.json(result))
  .catch(err=>res.json(err))
});

module.exports = router;
