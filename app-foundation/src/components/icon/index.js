import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

export default class extends Component {
	render() {
		const classes = classNames(
			styles.icon,
			this.props.className,
			styles[this.props.theme]
		);

		return (
			<i className={ classes }></i>
		);
	}
}
