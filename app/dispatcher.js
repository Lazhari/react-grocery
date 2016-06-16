'use strict';
const guid = require('guid');
var listeners = {};

module.exports = {
    register: function (callback) {
        var id = guid.raw();
        listeners[id] = callback;
        return id;
    },
    dispatche: function (payload) {
        console.info('Despatching ...', payload);
        for(var id in listeners) {
            var listener = listeners[id];
            listener(payload);
        }
    }
};