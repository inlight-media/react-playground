import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

export default class Icon extends Component {
	render() {
		var classes = classNames(
			styles.icon,
			this.props.className ? this.props.className : '',
			this.props.theme ? styles[this.props.theme] : ''
		);

		return (
			<i className={ classes }></i>
		);
	}
}
