
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


require('mongoose-currency').loadType(mongoose);

var Currency = mongoose.Types.Currency;

var promoSchema = new Schema({

    name: {

	    type: String,
	    required: true,
	    unique: false
    },
    description:{

        type:String,
        required:true,
        unique:false

    },
    image:{

        type: String,
        required:true,
        unique:false
    
    },
    label:{

        type: String,
        default: "",
        required:true,
        unique:false
    },
    price:{

        type: Currency ,
        required:true,
        unique:false

    },

}, 

{
    timestamps: true
});



var promotions = mongoose.model('promotion',promoSchema);

module.exports = promotions;


