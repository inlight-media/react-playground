import React, { Component } from 'react';
import styles from './style.css';
import List from '../list';

export default class Main extends Component {
	render() {
		return (
			<div className={ styles.container }>
				<List />
			</div>
		);
	}
}

