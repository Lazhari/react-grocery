'use strict';
const dispatcher = require('../dispatcher');
const _ = require('underscore');

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
    function deleteGroceryItem(item) {
        let index = _.findIndex( items,(_item) => {
            return _item.name === item.name;
        });
        items.shift(index, 1);
        triggerListeners();
    }

    function setGroceryItemBought(item, isBought) {
        let index = _.findIndex( items,(_item) => {
            return _item.name === item.name;
        });
        items[index].purchased = isBought || false;
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
                    break;
                case 'delete':
                    deleteGroceryItem(event.payload);
                    break;
                case 'buy':
                    setGroceryItemBought(event.payload, true);
                    break;
                case 'unbuy':
                    setGroceryItemBought(event.payload, false);
                    break;
            }
        }
    });

    return {
        getItems: getItems,
        onChange: onChange
    };
}

module.exports = new GroceryItemStore();
