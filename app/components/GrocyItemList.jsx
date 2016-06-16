'use strict';
var React = require('react');

var GrocyItem = require('./GrocyItem.jsx');
var GrocyListAddItem = require('./GrocyListAddItem.jsx');

module.exports = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Grocery Listify</h1>
                <div>
                    {
                        this.props.items.map(function (item, index) {
                            return (
                                <GrocyItem item={item} key={"item" + index}></GrocyItem>
                            )
                        })
                    }
                </div>
                <GrocyListAddItem></GrocyListAddItem>
            </div>
        );
    }
});
