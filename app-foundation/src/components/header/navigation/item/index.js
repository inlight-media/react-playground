import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import styles from './style.css';

export default class Item extends Component {

	constructor() {
		super();
		this.state = {
			isActive: false
		};

		this.render = render
		this.handleClick = handleClick.bind(this);
	}
};

function render() {
	var classes = classNames(
		styles.item,
		this.state.isActive ? styles.active : ''
	);

	return (
		<li className={ classes }>
			<Link to={ this.props.link } activeClassName={ styles.active } className={ styles.anchor }>{ this.props.children }</Link>
		</li>
	);
}

function handleClick() {
	event.preventDefault();

	this.setState({
		isActive: true
	});
}

