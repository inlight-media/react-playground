import React, { Component } from 'react';
import styles from './style.css';
import reset from './reset.css';

import Header from 'header';
import Main from 'main';

export default class App extends Component {
	render() {
		return (
			<div className={ styles.app }>
				<Header />
				<Main>
					{ this.props.children }
				</Main>
			</div>
		);
	}
};
