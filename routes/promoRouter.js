

var express = require("express");
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var promotions = require('../models/promotions');

var promoRouter = express.Router();

promoRouter.use(bodyParser.json());


promoRouter.route('/')

// .all(function (req,res,next) {
// 	res.writeHead(200,{'content-type':'text/plain'});
// 	next();
// })

.get(function(req,res,next){
        // res.end('Will send all the promos to you !');

        promotions.find({},function (err,promotion) {
        
          if(err) throw err;
          res.json(promotion);
        
        });

})

.post(function(req, res, next){

    // res.end('Will add the promo:: ' + req.body.name + ' with details: ' + req.body.description);  


    promotions.create(req.body,function (err,promotion) {
      
        if(err) throw err;
        console.log('promotions Created !!');

        var id = promotion._id;


        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the promotion with id: ' + id);

    });

})

.delete(function(req, res, next){
        // res.end('Deleting all promos');

              promotions.remove({}, function (err, resp) {

        if (err) throw err;
        res.json(resp);
    });
});


promoRouter.route('/:promoId')
// .all(function(req,res,next) {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       next();
// })

.get(function(req,res,next){
        // res.end('Will send details of the promo: ' + req.params.promoId +' to you!');

          promotions.findById(req.params.promoId,function(err,promotion){

          if(err) throw err;
          res.json(promotion);

        });
})

.put(function(req, res, next){
       //  res.write('Updating the promo: ' + req.params.promoId + '\n');
    	  // res.end('Will update the promo: ' + req.body.name + ' with details: ' + req.body.description);

        promotions.findByIdAndUpdate(req.params.promoId,{

          $set:req.body

        },
        {
          new:true
        },function  (err,promotion) {
          
            if(err) throw err;
            res.json(promotion);
        });
})

.delete(function(req, res, next){
        // res.end('Deleting promo: ' + req.params.promoId);

             promotions.findByIdAndRemove(req.params.promoId, function (err, resp) {  

          if (err) throw err;
        
          res.json(resp);
    });

});


module.exports = promoRouter;