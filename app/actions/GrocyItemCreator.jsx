'use strict';

const dispatcher = require('../dispatcher');

module.exports = {
    add: function(item) {
        dispatcher.dispatche({payload: item, type: "grocy-item:add"});
    }
};
