import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

export default class Button extends Component {
	render() {
		var classes = classNames(
			styles.ele,
			this.props.theme ? styles[this.props.theme] : '',
			this.props.size ? styles[this.props.size] : '',
			this.props.className ? this.props.className : ''
		);

		return (
			<a href={ this.props.href } className={ classes } onClick={ this.props.handler } role="button">
				{this.props.children}
			</a>
		);
	}
};
