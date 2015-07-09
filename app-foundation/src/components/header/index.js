import React, { Component } from 'react';
import styles from './style.css';
import Navigation from './navigation';

export default class Header extends Component {
	render() {
		return (
			<header className={ styles.container }>
				<Navigation />
			</header>
		);
	}
}
