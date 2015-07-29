import React, { Component } from 'react';
import styles from './style.css';

import Header from 'header';
import Main from 'main';

export default class extends Component {
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
