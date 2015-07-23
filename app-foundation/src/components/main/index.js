import React, { Component } from 'react';
import styles from './style.css';

export default class Wrapper extends Component {
	render() {
		return (
			<div className={ styles.main }>
				{ this.props.children }
			</div>
		);
	}
}

