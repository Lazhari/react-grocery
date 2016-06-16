'use strict';

const React = require('react');
const ReactDom = require('react-dom');
const GroceryItemList = require('./components/GroceryItemList.jsx');
const GroceryItemStore = require('./stores/GroceryItemStore.jsx');

let initial = GroceryItemStore.getItems();

function render() {
    ReactDom.render(<GroceryItemList items={initial} />, document.getElementById('app'));
}

GroceryItemStore.onChange(function(items) {
    initial = items;
    render();
});
render();
