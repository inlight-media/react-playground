import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';
import Button from 'button';

export default class ButtonSet extends Component {
	buildButtons(buttons) {
		return buttons.map(function(button) {
			return (
				<Button theme={ button.theme } href={ button.href } size={ button.size } className={ styles.button }>{ button.label }</Button>
			)
		});
	}

	render() {
		var classes = classNames(
			styles.container,
			this.props.className ? this.props.className : '',
			this.props.final ? styles.final : ''
		);

		return (
			<div className={ classes }>
				{ this.buildButtons(this.props.buttons) }
			</div>
		);
	}
}
