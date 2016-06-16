'use strict';
const guid = require('guid');
const listeners = {};

module.exports = {
    register: function (callback) {
        var id = guid.raw();
        listeners[id] = callback;
        return id;
    },
    dispatche: function (payload) {
        console.info('Despatching ...', payload);
        for(let id in listeners) {
            let listener = listeners[id];
            listener(payload);
        }
    }
};
