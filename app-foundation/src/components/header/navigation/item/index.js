import React, { Component } from 'react';
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
			<a href={ this.props.link } onClick={ this.handleClick } className={ styles.anchor }>{ this.props.children }</a>
		</li>
	);
}

function handleClick() {
	event.preventDefault();

	this.setState({
		isActive: true
	});
}

