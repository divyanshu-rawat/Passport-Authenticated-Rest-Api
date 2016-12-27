
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var favoriteScheme = new Schema({
    
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    favDish: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'dishes'
    }

}, {
    timestamps: true
});