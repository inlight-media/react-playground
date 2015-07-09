import React, { Component } from 'react';
import styles from './style.css';

export default class Item extends Component {
	render() {
		return (
			<li className={ styles.container }>
				<a href={ this.props.link }>{this.props.children}</a>
			</li>
		);
	}
};
