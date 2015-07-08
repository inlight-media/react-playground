var React = require('react');
var Todo = require('../todo');
var styles = require('./style.css');

React.render(<div className={styles.app}><Todo /></div>, document.body);
