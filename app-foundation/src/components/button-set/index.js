import React, { Component } from 'react';
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
		return (
			<div className={ styles.container }>
				{ this.buildButtons(this.props.buttons) }
			</div>
		);
	}
}
