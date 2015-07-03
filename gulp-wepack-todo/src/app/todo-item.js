/**
* @jsx React.DOM
*/

var React = require('react');
var Button = require('../shared/button');

var TodoItem = React.createClass({
  toggleChecked: toggleChecked,
  render: render
});

function toggleChecked() {
  var props = this.props;
  var handler = props.onCheckToggle;
  var id = props.id;
  console.log('TodoItem :: toggleChecked', { id: id });
  handler(id);
}

function render() {
  var props = this.props;
  var id = props.id;
  var checked = props.checked;
  var text = props.text;
  var textStyle = {
    textDecoration: checked && 'line-through'
  };

  return (
    <div style={{ cursor: 'pointer' }}>
      <input
	type="checkbox"
	checked={checked}
	onChange={this.toggleChecked} />
      <span style={textStyle} onClick={this.toggleChecked}>{text}</span>
      <Button handler={props.onRemove.bind(null, id)}>&times;</Button>
    </div>
  );
}

module.exports = TodoItem;
