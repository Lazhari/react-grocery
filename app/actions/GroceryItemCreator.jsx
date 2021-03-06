'use strict';

const dispatcher = require('../dispatcher');

module.exports = {
    add: function(item) {
        dispatcher.dispatche({payload: item, type: "grocery-item:add"});
    },
    delete: function(item) {
        dispatcher.dispatche({payload: item, type: "grocery-item:delete"});
    },
    buy: function(item) {
        dispatcher.dispatche({payload: item, type: "grocery-item:buy"});
    },
    unbuy: function(item) {
        dispatcher.dispatche({payload: item, type: "grocery-item:unbuy"});
    }
};
