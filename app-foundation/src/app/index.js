import React, { Component } from 'react';
import styles from './style.css';

import Header from 'header';

export default class App extends Component {
	render() {
		return (
			<div className={ styles.app }>
				<Header />
				{ this.props.children }
			</div>
		);
	}
};
