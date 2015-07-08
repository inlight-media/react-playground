/**
* @jsx React.DOM
*/

var React = require('react');
var styles = require('./style.css');

var TodoAdd = React.createClass({
  submit: submit,
  render: render
});

function submit(e) {
  e.preventDefault();

  var inputEl = React.findDOMNode(this.refs.text);
  // Is this the best way to retrieve the value? This is how
  // the docs suggest doing it and I don't think the value
  // of the input should be 'state'
  var todo = inputEl.value.trim();
  var handler = this.props.onTodoSubmit;

  console.log('TodoAdd :: submit', { todo: todo });

  handler(todo);

  // reset input box
  inputEl.value = '';

}

function render() {
  return (
    <form onSubmit={this.submit}>
      <input type="text" className={styles.box} placeholder="Submit a Todo" ref="text" autoFocus={true} />
    </form>
  );
}

module.exports = TodoAdd;
