import React, { Component } from 'react';
import styles from './style.css';

export default class extends Component {
	render() {
		return (
			<div className={ styles.footer }>
				{ this.props.children }
			</div>
		);
	}
};
