import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

export default class Tooltip extends Component {
	render() {
		var classes = classNames(
			styles.container,
			this.props.className ? this.props.className : ''
		);

		var tooltipClasses = classNames(
			styles.tooltip,
			this.props.position ? styles[this.props.position] : ''
		);

		return (
			<div className={ classes }>
				<div className={ tooltipClasses }>
					{ this.props.text }
				</div>
				{ this.props.children }
			</div>
		);
	}
};

