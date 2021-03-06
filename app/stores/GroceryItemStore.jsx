'use strict';
const dispatcher = require('../dispatcher');
const _ = require('underscore');

const RestHelper = require('../helpers/RestHelper');

function GroceryItemStore() {
    var items = [];

    RestHelper.get('api/items')
        .then(function(data) {
            items = data;
            triggerListeners();
        });

    var listeners = [];

    function getItems() {
        return items;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function addGroceryItem(item) {
        RestHelper.post('/api/items', item)
            .then((item) => {
                items.push(item);
                triggerListeners();
            })
            .catch((err) => {
                console.error(err);
            });
    }
    function deleteGroceryItem(item) {
        items = _.without(items, _.findWhere(items, {_id: item._id}));
        RestHelper.del('/api/items/'+ item._id);
        triggerListeners();
    }

    function setGroceryItemBought(item, isBought) {
        let index = _.findIndex( items,(_item) => {
            return _item.name === item.name;
        });
        items[index].purchased = isBought || false;
        RestHelper.patch('/api/items/' + item._id, item);
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
