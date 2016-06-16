'use strict';
const React = require('react');

const action = require('../actions/GrocyItemCreator.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {input: ""};
    },
    handleInputName: function(e) {
        this.setState({input: e.target.value});
    },
    addItem: function(e) {
        e.preventDefault();
        //console.log("Adding item !", this.state.input);
        action.add({name: this.state.input});
        this.setState({input: ''});
    },
    render: function() {
        return (
            <div className="grocery-additem">
                <form onSubmit={this.addItem}>
                    <input value={this.state.input} onChange={this.handleInputName}/>
                    <button>Add Item</button>
                </form>
            </div>
        );
    }
});