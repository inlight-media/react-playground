/**
* @jsx React.DOM
*/

var React = require('react');
var Button = require('../../../shared/button');

var TodoItem = React.createClass({
  toggleChecked: toggleChecked,
  handleSetEditing: handleSetEditing,
  handleEdit: handleEdit,
  handleEditChange: handleEditChange,
  getInitialState: getInitialState,
  render: render
});

var ENTER_KEY = 13;

function toggleChecked() {
  var props = this.props;
  var handler = props.onCheckToggle;
  var id = props.id;
  console.log('TodoItem :: toggleChecked', { id: id });
  handler(id);
}

function handleSetEditing() {
  var self = this;
  var props = self.props;
  var id = props.id;
  var handler = props.onSetEditableItem;
  console.log('TodoItem :: handleSetEditing', { id: id });
  // The cb is necessary here because focus doesn't work until
  // the dom el does not have { display: 'none }. So we wait
  // for the component to re-render and then set the foucs
  handler(id, function cb() {
    React.findDOMNode(self.refs.newText).focus();
  });
}

function handleEdit(e) {
  var props = this.props;
  var id = props.id;
  var handler = props.onEdit;
  var newText = e.target.value.trim()

  // only handle enter key events
  if (e.keyCode !== ENTER_KEY) {
    return;
  }

  e.preventDefault();

  console.log('handle edit todo', {
    id: id,
    newText: newText
  });

  handler(id, newText);
}

function handleEditChange(e) {
  this.setState({
    editText: e.target.value
  });
}

function getInitialState() {
  return {
    editText: this.props.text
  }
}

function render() {
  var props = this.props;
  var state = this.state;
  var id = props.id;
  var checked = props.checked;
  var editing = props.editing;
  var text = props.text;
  // TODO update show/hide with external css ~ 07-07-2015 @willmcclellan
  var textStyle = {
    textDecoration: checked && 'line-through',
    display: (editing ? 'none' : 'inline-block')
  };
  var inputStyle = {
    display: (editing ? 'inline-block' : 'none')
  };

  return (
    <div style={{ cursor: 'pointer' }}>
      <input
	type="checkbox"
	checked={checked}
	onChange={this.toggleChecked} />
      <span style={textStyle} onClick={this.handleSetEditing}>{text}</span>
      <input style={inputStyle} type="text" ref="newText" onChange={this.handleEditChange} onKeyDown={this.handleEdit} value={state.editText} autoFocus={true} />
      <Button handler={props.onRemove.bind(null, id)}>&times;</Button>
    </div>
  );
}

module.exports = TodoItem;
