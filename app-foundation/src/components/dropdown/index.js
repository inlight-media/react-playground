import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

import Icon from 'icon';

export default class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value
		};
	}

	buildOptions(options) {
		return options.map(function(option) {
			return (
				<option value={ option.value } key={ option.value }> { option.label }</option>
			);
		});
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	render() {
		const classes = classNames(
			styles.dropdown,
			this.props.className ? this.props.className : ''
		);

		return (
			<div className={ classes }>
				<select className={ styles.select } value={ this.state.value } onChange={ this.handleChange.bind(this) }>
					{ this.buildOptions(this.props.options) }
				</select>
				<Icon theme="arrow-down" className={ styles.icon } />
			</div>
		);

	}
}
