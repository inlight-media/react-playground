import React, { Component } from 'react';
import styles from './style.css';

export default class Item extends Component {
	render() {
		return (
			<li className={ styles.container } role="banner">
				{ this.props.children }
			</li>
		);
	}
}
