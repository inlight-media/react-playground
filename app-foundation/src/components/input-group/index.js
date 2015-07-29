import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

import Tooltip from 'tooltip';
import Icon from 'icon';

export default class extends Component {
	render() {
		const classes = classNames(
			styles.group,
			this.props.className ? this.props.className : ''
		);

		let tooltip;
		if (this.props.tooltip) {
			tooltip = (
				<Tooltip className={ styles.help } position="left" text={ this.props.tooltip }>
					<Icon theme="help" className={ styles.icon }/>
				</Tooltip>
			);
		}

		return (
			<div className={ classes }>
				<label className={ styles.label }>{ this.props.label }</label>
				<div className={ styles.fields }>
					{ this.props.children }
				</div>

				{ tooltip }
			</div>
		);
	}
};
