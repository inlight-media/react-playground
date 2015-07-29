import React, { Component } from 'react';
import styles from './style.css';

export default class extends Component {
	render() {
		return (
			<img src={ this.props.source } className={ styles.container } />
		);
	}
}
