import React, { Component } from 'react';
import styles from './style.css';
import Logo from './logo';
import Navigation from './navigation';

export default class Header extends Component {
	render() {
		return (
			<header className={ styles.container } role="banner">
				<Logo source="http://placehold.it/50x50" />
				<Navigation />
			</header>
		);
	}
}
