/**
* @jsx React.DOM
*/

var React = require('react');

var Button = React.createClass({

  render: function() {
    return (
      <button type="button" onClick={this.props.handler}>
	{this.props.children}
      </button>
    );
  }

});

module.exports = Button;
