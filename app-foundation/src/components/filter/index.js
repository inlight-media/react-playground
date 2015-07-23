import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';
import Dropdown from 'dropdown';

export default class Filter extends Component {
	buildDropdowns(dropdowns) {
		return dropdowns.map(function(dropdown) {
			// @TODO: Add className={ this.props.dropdownClass } here. Need to reference correct *this*
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
