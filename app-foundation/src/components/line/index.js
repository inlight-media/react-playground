import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

export default class extends Component {
	render() {
		const classes = classNames(
			styles.line,
			this.props.className ? this.props.className : ''
		);

		return (
			<div className={ classes }></div>
		);
	}
};
