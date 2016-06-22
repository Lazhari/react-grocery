'use strict';
const $ = require('jquery');

module.exports = {
    get: function(url) {
        return new Promise(function(success, error) {
            $.ajax({
                url: url,
                dataType: "json",
                success: success,
                error: error
            });
        });
    },
    post: function(url, data) {
        return new Promise(function(success, error) {
            $.ajax({
                url: url,
                data: data,
                type: "POST",
                success: success,
                error: error
            });
        });
    }
};
