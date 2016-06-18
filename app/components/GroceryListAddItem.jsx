'use strict';
const React = require('react');

const action = require('../actions/GroceryItemCreator.jsx');

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
            <div className="panel">
                <form onSubmit={this.addItem}>
                    <div className="form-group">
                        <input className="form-control" value={this.state.input} onChange={this.handleInputName}/>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-block btn-success" type="submit">Add Item</button>
                    </div>
                </form>
            </div>
        );
    }
});
