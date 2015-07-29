import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

export default class extends Component {
	render() {
		const classes = classNames(
			styles.input,
			this.props.className ? this.props.className : ''
		);

		return (
			<input type={ this.props.type ? this.props.type : 'text' } className={ classes } />
		);
	}
};
