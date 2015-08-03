import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

export default class extends Component {
	render() {
		const classes = classNames(
			styles.form,
			this.props.className
		);

		return (
			<form className={ classes } action={ this.props.action }>
				{ this.props.children }
			</form>
		);
	}
};
