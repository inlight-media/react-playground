import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

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
				<option value={ option.value } key={ option.slug }> { option.label }</option>
			);
		});
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	render() {
		return (
			<div className={ styles.container }>
				<select className={ styles.select } value={ this.state.value } onChange={ this.handleChange.bind(this) }>
					{ this.buildOptions(this.props.options) }
				</select>
			</div>
		);

	}
}
