console.log('Hello from jsx !');

var React = require('react');
var ReactDom = require('react-dom');
var GroceryItemList = require('./components/GrocyItemList.jsx');

var initial = [
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
ReactDom.render(<GroceryItemList items={initial} />, document.getElementById('app'));
