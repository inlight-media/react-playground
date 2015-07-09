import React, { Component } from 'react';
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
	console.log('this', this);
	var isActive = this.state.isActive;
	console.log('isActive', isActive);
	return (
		<li className={ styles.container }>
			<a href={ this.props.link } onClick={ this.handleClick } className={ isActive ? 'active' : '' }>{ this.props.children }</a>
		</li>
	);
}

function handleClick() {
	event.preventDefault();
	console.log('event', event);
	console.log('this.state', this.state);

	this.setState({
		isActive: true
	});
}




// getInitialState() {
// 	return {
// 		isActive: false
// 	};
// }
//
// className={ isActive ? 'active' : '' }
