import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';
import { Link } from 'react-router';

export default class extends Component {
	render() {
		const classes = classNames(
			styles.button,
			styles[this.props.theme],
			styles[this.props.size],
			this.props.className
		);

		return (
			<Link to={ this.props.href } className={ classes }>
				{ this.props.children }
			</Link>
		);
	}
};
