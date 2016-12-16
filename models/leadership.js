
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


// require('mongoose-currency').loadType(mongoose);

// var Currency = mongoose.Types.Currency;

var leaderSchema = new Schema({

    name: {

	    type: String,
	    required: true,
	    // unique: true
    },
    description:{

        type:String,
        required:true,
        // unique:true

    },
    image:{

        type: String,
        required:true,
        // unique:true
    
    },
    designation:{

        type: String,
        default: "",
        required:true,
        // unique:true
    },
    abbr:{

        type: String ,
        required:true,
        // unique:true

    },

}, 

{
    timestamps: true
});



var leaderships = mongoose.model('leadership',leaderSchema);

module.exports = leaderships;


