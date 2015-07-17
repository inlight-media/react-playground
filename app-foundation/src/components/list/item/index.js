import React, { Component } from 'react';
import styles from './style.css';
import ButtonSet from 'button-set';
import Icon from 'icon';

export default class Item extends Component {
	render() {
		var item = this.props.meta;
		return (
			<li className={ styles.item } role="banner">
				<Icon className={ styles.icon } />
				<h4 className={ styles.title }>{ item.title }</h4>
				<p className={ styles.description }>{ item.description }</p>
				<ButtonSet buttons={ item.buttons } className={ styles.buttonSet } />
			</li>
		);
	}
}
