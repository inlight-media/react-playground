import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

export default class Line extends Component {
	render() {
		var classes = classNames(
			styles.line,
			this.props.className ? this.props.className : ''
		);

		return (
			<div className={ classes }></div>
		);
	}
};