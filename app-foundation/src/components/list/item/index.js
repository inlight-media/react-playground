import React, { Component } from 'react';
import styles from './style.css';
import Button from '../../button';

export default class Item extends Component {
	render() {
		return (
			<li className={ styles.container } role="banner">
				{ this.props.children }
				<Button theme="success" href="/hello-world">Hello World</Button>
			</li>
		);
	}
}
