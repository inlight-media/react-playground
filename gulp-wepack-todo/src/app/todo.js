/**
* @jsx React.DOM
*/

var _ = require('lodash');
var React = require('react');
var TodoAdd = require('./todo-add');
var TodoList = require('./todo-list');
var Button = require('../shared/button');

var Todo = React.createClass({
  add: add,
  remove: remove,
  todoCount: todoCount,
  toggleChecked: toggleChecked,
  setFilter: setFilter,
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

function remove(id) {
  console.log('Todo :: remove', { id: id });
  var todos = this.state.todos;
  var newTodos = _.reject(todos, { id: id });
  this.setState({
    todos: newTodos
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

function setFilter(filter) {
  this.setState({
    filter: filter
  });
}

function getInitialState() {
  return {
    todos: [],
    filter: undefined
  }
}

function render() {
  var state = this.state;
  var filter = state.filter;
  var todos = state.todos;
  var filteredTodos = _.isBoolean(filter)
    ? _.filter(todos, { checked: filter })
    : todos;
  return (
    <div>
      <h1>Todos</h1>
      <TodoAdd onTodoSubmit={this.add} />
      <TodoList todos={filteredTodos} onCheckToggle={this.toggleChecked} onRemove={this.remove} />
      <footer>
	{this.todoCount()} Todos
	<Button handler={this.setFilter.bind(null, '')}>All</Button>
	<Button handler={this.setFilter.bind(null, false)}>Active</Button>
	<Button handler={this.setFilter.bind(null, true)}>Completed</Button>
      </footer>

    </div>
  );
}

module.exports = Todo;
