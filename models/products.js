var mongoose = require('../node_modules/mongoose');

var productSchema = new mongoose.Schema({ 
    brand: String,
    item: String,
    price: Number,
    category: { 
        type: String,
        enum: ['Guitars', 'Bass', 'Microphones', 'Keys']
    }  
},
{ timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);