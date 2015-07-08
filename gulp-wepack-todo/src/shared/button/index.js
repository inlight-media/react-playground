/**
* @jsx React.DOM
*/

var React = require('react');
var styles = require('./style.css');

var Button = React.createClass({

  render: function() {
    return (
      <button type="button" className={styles.default} onClick={this.props.handler}>
	{this.props.children}
      </button>
    );
  }

});

module.exports = Button;
