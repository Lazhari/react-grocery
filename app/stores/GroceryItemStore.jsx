'use strict';
const dispatcher = require('../dispatcher');
function GroceryItemStore() {
    var items = [
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

    var listeners = [];

    function getItems() {
        return items;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function addGroceryItem(item) {
        items.push(item);
        triggerListeners();
    }

    function triggerListeners() {
        listeners.forEach((listener) => {
            listener(items);
        });
    }

    dispatcher.register(function(event) {
        var split = event.type.split(':');
        if(split[0] === 'grocery-item') {
            switch(split[1]) {
                case 'add':
                    addGroceryItem(event.payload);
            }
        }
    });

    return {
        getItems: getItems,
        onChange: onChange
    };
}

module.exports = new GroceryItemStore();
