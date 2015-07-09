import React, { Component } from 'react';
import styles from './style.css';

export default class Button extends Component {
	render() {
		var theme = this.props.theme || 'default';

		return (
			<button type="button" className={styles[theme]} onClick={this.props.handler}>
				{this.props.children}
			</button>
		);
	}
};
