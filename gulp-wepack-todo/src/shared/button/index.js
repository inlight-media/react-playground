/**
* @jsx React.DOM
*/

var React = require('react');
var styles = require('./style.css');


var Button = React.createClass({

  render: function() {
    var theme = this.props.theme || 'default';

    return (
      <button type="button" className={styles[theme]} onClick={this.props.handler}>
	{this.props.children}
      </button>
    );
  }

});

module.exports = Button;
