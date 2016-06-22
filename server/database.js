'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/grocery', (err) => {
    if(err) {
        console.error(`Error connection , ${err}`);
    } else {
        console.log(`Connected`);
    }
});
