'use strict';
const React = require('react');
const action = require('../actions/GroceryItemCreator.jsx');
module.exports = React.createClass({
    delete: function(e) {
        e.preventDefault();
        action.delete(this.props.item);
    },
    togglePurshased: function(e) {
        e.preventDefault();
        if(this.props.item.purchased) {
            action.unbuy(this.props.item);
        } else {
            action.buy(this.props.item);
        }
    },
    render: function() {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-sm-8">
                        <h3 className={this.props.item.purchased
                            ? 'strickthrough'
                            : ''}>
                            {this.props.item.name}
                        </h3>
                    </div>
                    <div className="col-sm-2">
                        <form className="pull-right" onSubmit={this.delete}>
                            <button className="btn btn-danger">
                                <i className="glyphicon glyphicon-trash"></i>
                            </button>
                        </form>
                    </div>
                    <div className="col-sm-2">
                        <form className="pull-right" onSubmit={this.togglePurshased}>
                            <button className={this.props.item.purchased ? 'btn' : 'btn btn-primary'}>
                                {this.props.item.purchased ? "unbuy" : "Buy"}
                            </button>
                        </form>
                    </div>
                </div>
            </li>
        );
    }
});
