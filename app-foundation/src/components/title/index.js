import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

import Line from 'line';
import Button from 'button';

export default class extends Component {
	render() {
		const classes = classNames(
			styles.title,
			this.props.className
		);

		let line;
		let button;
		if (this.props.line) {
			line = (<Line />);
		}

		if (this.props.button) {
			button = (<Button href={ this.props.button.href } theme="primary" className={ styles.button }>{ this.props.button.label }</Button>);
		}

		return (
			<div>
				<div className={ classes }>
					<h1 className={ styles.text }>{ this.props.label }</h1>
					{ this.props.children }
					{ button }
				</div>
				{ line }
			</div>
		);
	}
}
