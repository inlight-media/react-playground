import React, { Component } from 'react';
import styles from './style.css';

export default class NotFound extends Component {
	render() {
		return (
			<div className={ styles.container }>
				<h1>404</h1>
				<h2>Page not found.</h2>
			</div>
		);
	}
}

