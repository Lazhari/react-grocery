'use strict';

const mongoose = require('mongoose');
const GroceryItem = require('./models/GroceryItem');

mongoose.connect('mongodb://localhost/grocery', (err) => {
    if(err) {
        console.error(`Error connection , ${err}`);
    } else {
        console.log(`Connected`);
        let items = [
            {
                "purchased": false,
                "name": "Adela Reese"
            },
            {
                "purchased": false,
                "name": "Ferguson Estrada"
            },
            {
                "purchased": true,
                "name": "Ingram Burton"
            },
            {
                "purchased": false,
                "name": "Nanette Anderson"
            },
            {
                "purchased": false,
                "name": "Celeste Britt"
            }
        ];
        GroceryItem.count({}, (err, results) => {
            if(err || !results) {
                items.forEach(item => {
                    new GroceryItem(item).save();
                });
            }
        });
    }
});
