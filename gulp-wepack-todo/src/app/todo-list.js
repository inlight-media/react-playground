/**
* @jsx React.DOM
*/

var React = require('react');
var _ = require('lodash');
var TodoItem = require('./todo-item');

var TodoList = React.createClass({
  render: render
});

function buildTodoItems() {
  var props = this.props;
  var todos = props.todos;
  var onCheckToggle = props.onCheckToggle;
  var onRemove = props.onRemove;
  return _.map(todos, function mapTodos(todo) {
    return (
      <TodoItem {...todo} key={todo.id} onCheckToggle={onCheckToggle} onRemove={onRemove} />
    )
  });
}

function render() {
  var todoItems = buildTodoItems.bind(this);
  return (
    <div className="todo-list">
      {todoItems()}
    </div>
  );
}

module.exports = TodoList;
