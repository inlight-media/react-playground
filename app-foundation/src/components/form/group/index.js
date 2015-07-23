import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

export default class FormGroup extends Component {
	render() {
		var classes = classNames(
			styles.formGroup,
			this.props.className ? this.props.className : ''
		);

		var title;
		if (this.props.title) {
			title = (<h2 className={ styles.title }>{ this.props.title }</h2>);
		}

		return (
			<div className={ classes }>
				{ title }
				{ this.props.children }
			</div>
		);
	}
};
