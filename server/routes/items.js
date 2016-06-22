'use strict';
const GroceryItem = require('../models/GroceryItem');

module.exports = function(app) {
    app.route('/api/items')
        .get((req, res) => {
            GroceryItem.find({})
                .exec((err, items) => {
                    if (err) {
                        return res.send([]);
                    }
                    return res.send(items);
                });
        })
        .post((req, res) => {
            let item = req.body;
            new GroceryItem(item).save((err) => {
                if (err) {
                    return res.status(500).send({
                        message: err.message
                    });
                }
                return res.status(300).send();
            });
        });
    app.route('/api/items/:id')
        .delete((req, res) => {
            GroceryItem.remove({
                _id: req.params.id
            }, (err) => {
                if(err) {
                    return res.status(500).send(err.message);
                }
                return res.status(200);
            });
        })
        .patch((req, res) => {
            GroceryItem.findOne({
                _id: req.body._id
            }, (err, item) => {
                for(let key in req.body) {
                    item[key] = req.body[key];
                }
                item.save();
                return res.status(200);
            });
        });
};
