/**
* @jsx React.DOM
*/

var _ = require('lodash');
var React = require('react');
var TodoAdd = require('./components/todo-add');
var TodoItem = require('./components/todo-item');
var Button = require('../shared/button');
var styles = require('./todo.css');

var Todo = React.createClass({
  add: add,
  remove: remove,
  buildTodoItems: buildTodoItems,
  todoCount: todoCount,
  toggleChecked: toggleChecked,
  editTodo: editTodo,
  setEditing: setEditing,
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

function buildTodoItems() {
  var self = this;
  var state = self.state;
  var todos = state.todos;
  var filter = state.filter;
  var filteredTodos = _.isBoolean(filter)
    ? _.filter(todos, { checked: filter })
    : todos;
  return _.map(filteredTodos, function mapTodos(todo) {
    // editing is true when the state editing Id is
    // equal to the current todo Id
    var editing = (state.editing === todo.id);
    return (
      // the spread syntax (...obj) allows us to apply
      // all the props of the object as properties
      // to the Component or element
      <TodoItem {...todo}
	key={todo.id}
	editing={editing}
	onEdit={self.editTodo}
	onSetEditableItem={self.setEditing}
	onCheckToggle={self.toggleChecked}
	onRemove={self.remove} />
    )
  });
}

function setEditing(id, callback) {
  console.log('Todo :: setEditing', { id: id });
  this.setState({
    editing: id
  }, callback);
}

function editTodo(id, newText) {
  console.log('Todo :: editTodo', {
    id: id,
    newText: newText
  });

  newText = newText || '';

  var todos = this.state.todos;
  var todo = _.find(todos, { id: id });
  todo.text = newText.trim();

  // if the todo is edited as empty
  // just remove it from the collection
  if (todo.text === '') {
    this.remove(id);
    return;
  }

  this.setState({
    editing: undefined, // reset editing state
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

function setFilter(filter) {
  this.setState({
    filter: filter
  });
}

function getInitialState() {
  return {
    todos: [],
    editing: undefined, // should ref the id of currently editing item
    filter: undefined
  }
}

function render() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Todos</h1>
      <TodoAdd onTodoSubmit={this.add} />
      <div className="todo-list">
	{this.buildTodoItems()}
      </div>
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
