'use strict';
const GroceryItem = require('../models/GroceryItem');

module.exports = function (app) {
    app.route('/api/items')
        .get((req, res) => {
            GroceryItem.find({})
                .exec((err, items) => {
                    if(err) {
                        return res.send([]);
                    }
                    return res.send(items);
                });
        })
        .post((req, res) => {
            let item = req.body;
            new GroceryItem(item).save((err) => {
                if(err) {
                    return res.status(500).send({message: err.message});
                }
                return res.status(300).send();
            });
        });
};
