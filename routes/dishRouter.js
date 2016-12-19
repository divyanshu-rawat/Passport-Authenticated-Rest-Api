

var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Dishes = require('../models/dishes');
var Verify = require('../routes/verify');
var dishRouter = express.Router();

dishRouter.use(bodyParser.json());


dishRouter.route('/')

// .all(function (req,res,next) {
// 	res.writeHead(200,{'content-type':'text/plain'});
// 	next();
// })

.get(Verify.verifyOrdinaryUser,function(req,res,next){
        // res.end('Will send all the dishes to you!');

        Dishes.find({},function (err,dish) {
        
          if(err) throw err;
          res.json(dish);
        
        });
})




.post(Verify.verifyOrdinaryUser,function(req, res, next){

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

.delete(Verify.verifyOrdinaryUser,function(req, res, next){
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

.get(Verify.verifyOrdinaryUser,function(req,res,next){
        // res.end('Will send details of the dish: ' + req.params.dishId +' to you!');

        Dishes.findById(req.params.dishId,function(err,dish){

          if(err) throw err;
          res.json(dish);

        });
})

.put(Verify.verifyOrdinaryUser,function(req, res, next){
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

.delete(Verify.verifyOrdinaryUser,function(req, res, next){
        // res.end('Deleting dish: ' + req.params.dishId);
         Dishes.findByIdAndRemove(req.params.dishId, function (err, resp) {  

          if (err) throw err;
        
          res.json(resp);
    });

});

dishRouter.route('/:dishId/comments')

.get(Verify.verifyOrdinaryUser,function (req, res, next) {
    Dishes.findById(req.params.dishId, function (err, dish) {
        if (err) throw err;
        res.json(dish.comments);
    });
})


.post(Verify.verifyOrdinaryUser,function (req, res, next) {
    Dishes.findById(req.params.dishId, function (err, dish) {
        if (err) throw err;
        dish.comments.push(req.body);
        dish.save(function (err, dish) {
            if (err) throw err;
            console.log('Updated Comments!');
            res.json(dish);
        });
    });
})

.delete(Verify.verifyOrdinaryUser,function (req, res, next) {
    Dishes.findById(req.params.dishId, function (err, dish) {
        if (err) throw err;

        for (var i = (dish.comments.length - 1); i >= 0; i--) {
            dish.comments.id(dish.comments[i]._id).remove();
        }

        dish.save(function (err, result) {
            if (err) throw err;
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('Deleted all comments!');
        });
    });
});

dishRouter.route('/:dishId/comments/:commentId')

.get(Verify.verifyOrdinaryUser,function (req, res, next) {
    Dishes.findById(req.params.dishId, function (err, dish) {
        if (err) throw err;
        res.json(dish.comments.id(req.params.commentId));
    });
})


.put(Verify.verifyOrdinaryUser,function (req, res, next) {
    // We delete the existing commment and insert the updated
    // comment as a new comment
    Dishes.findById(req.params.dishId, function (err, dish) {
        if (err) throw err;
        dish.comments.id(req.params.commentId).remove();

        dish.comments.push(req.body);
        
        dish.save(function (err, dish) {
            if (err) throw err;
            console.log('Updated Comments!');
            res.json(dish);
        });
    });
})

.delete(Verify.verifyOrdinaryUser,function (req, res, next) {
    Dishes.findById(req.params.dishId, function (err, dish) {
        dish.comments.id(req.params.commentId).remove();
        dish.save(function (err, resp) {
            if (err) throw err;
            res.json(resp);
        });
    });
});






module.exports = dishRouter;