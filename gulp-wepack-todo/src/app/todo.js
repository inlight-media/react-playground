/**
* @jsx React.DOM
*/

var _ = require('lodash');
var React = require('react');
var TodoAdd = require('./todo-add');
var TodoList = require('./todo-list');

var Todo = React.createClass({
  add: add,
  todoCount: todoCount,
  toggleChecked: toggleChecked,
  getInitialState: getInitialState,
  render: render
});

function add(todo) {
  console.log('Todo :: add', { todo: todo });
  var todos = this.state.todos;
  var newTodo = {
    id: Date.now(), // hack
    text: todo,
    checked: false // default unchecked, obvs
  }
  todos = todos.concat([newTodo]);
  this.setState({
    todos: todos
  });
}

function toggleChecked(id) {
  var todos = this.state.todos;
  var todo = _.find(todos, { id: id });
  todo.checked = !todo.checked;
  this.setState({
    todos: todos
  });
}

function todoCount() {
  return this.state.todos.length || 0;
}

function getInitialState() {
  return {
    todos: []
  }
}

function render() {
  var todos = this.state.todos;
  return (
    <div>
      <h1>Todos</h1>
      <TodoAdd onTodoSubmit={this.add} />
      <TodoList todos={todos} onCheckToggle={this.toggleChecked} />
      <footer>
	{this.todoCount()} Todos
      </footer>

    </div>
  );
}

module.exports = Todo;
