import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

import Line from 'line';

export default class Title extends Component {
	render() {
		var classes = classNames(
			styles.title,
			this.props.className ? this.props.className : ''
		);

		var optionalLine;
		if (this.props.line) {
			optionalLine = (<Line />);
		}

		return (
			<div>
				<div className={ classes }>
					<h1 className={ styles.text }>{ this.props.label }</h1>
					{ this.props.children }
				</div>
				{ optionalLine }
			</div>
		);
	}
}
