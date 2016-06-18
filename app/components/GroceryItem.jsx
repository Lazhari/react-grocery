'use strict';
const React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-sm-10">
                        <h3 className={this.props.item.purchased
                            ? 'strickthrough'
                            : ''}>
                            {this.props.item.name}
                        </h3>
                    </div>
                    <div className="col-sm-2">
                        <form className="pull-right">
                            <button className="btn btn-danger">
                                <i className="glyphicon glyphicon-remove"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </li>
        );
    }
});
