
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


require('mongoose-currency').loadType(mongoose);

var Currency = mongoose.Types.Currency;

var promoSchema = new Schema({

    name: {

	    type: String,
	    required: true
	    // unique: true
    },
    description:{

        type:String,
        required:true
        // unique:true

    },
    image:{

        type: String,
        required:true
        // unique:true
    
    },
    label:{

        type: String,
        default: "",
        required:true
        // unique:true
    },
    price:{

        type: Currency ,
        required:true
        // unique:true

    },

}, 

{
    timestamps: true
});



var promotions = mongoose.model('promotion',promoSchema);

module.exports = promotions;


