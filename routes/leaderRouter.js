

var
  express = require('express'),
  bodyParser = require('body-parser');

var mongoose = require('mongoose');
var leaderships = require('../models/leadership');

var Verify = require('../routes/verify');

var leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')

  // .all(function(req,res,next) {
  //   res.writeHead(200, { 'Content-Type': 'text/plain' });
  //   next();
  // })

  .get(Verify.verifyOrdinaryUser,function(req,res,next){
    // res.end('Will send all the leaders to you!');

    leaderships.find({},function (err,leadership) {
        
          if(err) throw err;

          res.json(leadership);
        
        });


  })

  .post(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req, res, next){
    // res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);


    leaderships.create(req.body,function (err,leadership) {
      
        if(err) throw err;
        console.log('leadership Created !!');

        var id = leadership._id;


        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end('Added the leadership with id: ' + id);

    });

  })

  .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req, res, next){
    // res.end('Deleting all leaders');

     leaderships.remove({}, function (err, resp) {

        if (err) throw err;
        res.json(resp);
    });


  });

  
  leaderRouter.route('/:leaderId')
  
  // .all(function(req,res,next) {
  //   res.writeHead(200, { 'Content-Type': 'text/plain' });
  //   next();
  // })

  .get(Verify.verifyOrdinaryUser,function(req,res,next){
    // res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');


       leaderships.findById(req.params.leaderId,function(err,leadership){

          if(err) throw err;
          res.json(leadership);

        });

  })

  .put(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req, res, next){

    // res.write('Updating the leader: ' + req.params.leaderId + '\n');
    // res.end('Will update the leader: ' + req.body.name +
    //   ' with details: ' + req.body.description);


     leaderships.findByIdAndUpdate(req.params.leaderId,{

          $set:req.body

        },
        {
          new:true
        },function  (err,leadership) {
          
            if(err) throw err;
            res.json(leadership);
        });


  })

  .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req, res, next){
    // res.end('Deleting leader: ' + req.params.leaderId);

    leaderships.findByIdAndRemove(req.params.leaderId, function (err, resp) {  

          if (err) throw err;
        
          res.json(resp);
    });
    
  });

module.exports = leaderRouter;