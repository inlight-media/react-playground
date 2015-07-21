import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

export default class Title extends Component {
	render() {
		var classes = classNames(
			styles.title,
			this.props.className ? this.props.className : ''
		);

		return (
			<div className={ classes }>
				<h1>{ this.props.label }</h1>
				{ this.props.children }
			</div>
		);
	}
}
