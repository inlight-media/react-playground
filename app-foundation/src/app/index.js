var React = require('react');
var Header = require('../components/header');
var styles = require('./style.css');

React.render(
	<div className={styles.app}>
		<Header />
	</div>
	, document.body);
