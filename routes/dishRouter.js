

var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Dishes = require('../models/dishes');

var dishRouter = express.Router();

dishRouter.use(bodyParser.json());


dishRouter.route('/')

// .all(function (req,res,next) {
// 	res.writeHead(200,{'content-type':'text/plain'});
// 	next();
// })

.get(function(req,res,next){
        // res.end('Will send all the dishes to you!');

        Dishes.find({},function (err,dish) {
        
          if(err) throw err;
          res.json(dish);
        
        });
})




.post(function(req, res, next){

    // res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);    

    Dishes.create(req.body,function (err,dish) {
      
        if(err) throw err;
        console.log('Dish Created !!');

        var id = dish._id;


        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the dish with id: ' + id);

    });

})

.delete(function(req, res, next){
        // res.end('Deleting all dishes');

          Dishes.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});


dishRouter.route('/:dishId')
// .all(function(req,res,next) {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       next();
// })

.get(function(req,res,next){
        // res.end('Will send details of the dish: ' + req.params.dishId +' to you!');

        Dishes.findById(req.params.dishId,function(err,dish){

          if(err) throw err;
          res.json(dish);

        });
})

.put(function(req, res, next){
        // res.write('Updating the dish: ' + req.params.dishId + '\n');
    	  // res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);

        Dishes.findByIdAndUpdate(req.params.dishId,{

          $set:req.body

        },
        {
          new:true
        },function  (err,dish) {
          
            if(err) throw err;
            res.json(dish);
        });

})

.delete(function(req, res, next){
        // res.end('Deleting dish: ' + req.params.dishId);
         Dishes.findByIdAndRemove(req.params.dishId, function (err, resp) {  

          if (err) throw err;
        
          res.json(resp);
    });

});

dishRouter.route('/:dishId/comments')

.get(function (req, res, next) {
    Dishes.findById(req.params.dishId, function (err, dish) {
        if (err) throw err;
        res.json(dish.comments);
    });
})

module.exports = dishRouter;