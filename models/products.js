var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({ 
    brand: String,
    item: String,
    price: Number,
    category: { 
        type: String,
        enum: ['Guitar', 'Bass', 'Microphone', 'Keys']
    }  
},
{ timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);