import React, { Component } from 'react';
import styles from './style.css';
import ButtonSet from 'button-set';
import Icon from 'icon';

export default class Item extends Component {
	render() {
		const item = this.props.meta;
		return (
			<li className={ styles.item } role="banner">
				<div className={ styles.body }>
					<Icon className={ styles.icon } theme={ item.icon } />
					<h4 className={ styles.title }>{ item.title }</h4>
					<p className={ styles.description }>{ item.description }</p>
				</div>
				<ButtonSet buttons={ item.buttons } className={ styles.buttonSet } />
			</li>
		);
	}
}
