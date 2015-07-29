import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';
import Dropdown from 'dropdown';

export default class extends Component {
	buildDropdowns(dropdowns) {
		return dropdowns.map(function(dropdown) {
			return (
				<Dropdown options={ dropdown.items } className={ styles.dropdown }></Dropdown>
			)
		});
	}

	render() {
		const classes = classNames(
			styles.filter,
			this.props.className ? this.props.className : ''
		);

		return (
			<div className={ classes }>
				{ this.buildDropdowns(this.props.dropdowns) }
			</div>
		);
	}
}
