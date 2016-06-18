'use strict';
var React = require('react');

var GroceryItem = require('./GroceryItem.jsx');
var GroceryListAddItem = require('./GroceryListAddItem.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item text-center">
                        <h3>Grocery Listify</h3>
                    </li>
                    {this.props.items.map((item, index) => {
                        return (
                            <GroceryItem item={item} key={"item" + index}></GroceryItem>
                        );
                    })
}
                </ul>
                <GroceryListAddItem></GroceryListAddItem>
            </div>
        );
    }
});
