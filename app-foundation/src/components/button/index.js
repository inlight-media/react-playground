import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';
import { Link } from 'react-router';

export default class Button extends Component {
	render() {
		const classes = classNames(
			styles.button,
			this.props.theme ? styles[this.props.theme] : '',
			this.props.size ? styles[this.props.size] : '',
			this.props.className ? this.props.className : ''
		);

		return (
			<Link to={ this.props.href } className={ classes }>
				{ this.props.children }
			</Link>
		);
	}
};
