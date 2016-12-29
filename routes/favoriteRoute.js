
var
  express = require('express'),
  bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Favorites = require('../models/favorites');

var Verify = require('../routes/verify');

var favoritesRouter = express.Router();

favoritesRouter.use(bodyParser.json());

favoritesRouter.route('/')

  .all(Verify.verifyOrdinaryUser)

  .get(function(req,res,next){


       Favorites.find({'postedBy': req.decoded._doc._id})

        .populate('postedBy')

        .populate('dishes')

        .exec(function (err,favorites) {

             if(err) throw err;




             res.json(favorites);
           
          });


  })

.post(function (req, res, next) {
    
      

      Favorites.find({'postedBy': req.decoded._doc._id})

            .exec(function (err, favorites) {

                var count = 0;

                console.log(favorites);
    
                if(favorites.length > 0)
                {
                    for(i=0;i< favorites[0].dishes.length; i++)
                    {
                       if(favorites[0].dishes[i] == req.body._id)
                       {
                          count++;
                          break;
                       }
                    }

                    if(count > 0)
                    {
                       console.log('You have already added this dish before !!');
                       res.json(favorites);
                    }

                    else
                    {

                        favorites[0].dishes.push(req.body._id);
                        
                        favorites[0].save(function (err, favorite) {
                        
                            if (err) throw err;
                        
                            console.log('Something is up!');
                        
                            res.json(favorite);
                        });        

                    }

                }


                else
                {

                     Favorites.create({'postedBy': req.decoded._doc._id},function (err,favorite) {
              
                        if(err) throw err;
                        
                        favorite.dishes.push(req.body._id);
                        
                        favorite.save(function (err, favorite) {
                        
                            if (err) throw err;
                        
                            console.log('Something is up!');
                        
                            res.json(favorite);
                        });

                    });
                }
    });

})

.delete(function (req, res, next) {

        Favorites.remove({'postedBy': req.decoded._doc._id}, function (err, resp) {
            if (err) throw err;
            res.json(resp);
        })

    });


favoritesRouter.route('/:dishId')


  .all(Verify.verifyOrdinaryUser)


  .delete(function (req, res, next) {

     Favorites.find({'postedBy': req.decoded._doc._id})

            .exec(function (err, favorites)  {

                var favorite = favorites ? favorites[0] : null;

              if (favorite) {

                for (var i = (favorite.dishes.length - 1); i >= 0; i--) {
                    if (favorite.dishes[i] == req.params.dishId) {
                        favorite.dishes.remove(req.params.dishId);
                    }
                
                }
                favorite.save(function (err, favorite) {
                
                    if (err) throw err;
                    console.log('Here you go!');
                    res.json(favorite);
                
                });
            } else {
                
                console.log('No favourites!');
                res.json(favorite);
            }

        });


});




module.exports = favoritesRouter;