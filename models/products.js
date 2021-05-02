var mongoose = require('../node_modules/mongoose');

var productSchema = new mongoose.Schema({ 
    brand: String,
    item: String,
    price: Number,
    category: { 
        type: String,
        enum: ['Guitar', 'Bass', 'Microphone', 'Keyboard']
    }  
},
{ timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);