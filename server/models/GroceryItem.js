'use strict';

const mongoose = require('mongoose');

const GroceryItem = new mongoose.Schema({
    name: String,
    purchased: Boolean,
    id: String
});

module.exports = mongoose.model('GroceryItem', GroceryItem, 'groceryItems');
