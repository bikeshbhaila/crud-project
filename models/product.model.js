const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: 'This field is required.'
    },
    productDetails: {
        type: String,
        required: 'This field is required.'
    },
    category: {
        type: String,
        required: 'This field is required.'
    },
    price: {
        type: Number,
        required: 'This field is required.'
    }
});

mongoose.model('Product', productSchema);