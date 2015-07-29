import React, { Component } from 'react';
import styles from './style.css';
import Button from 'button';
import Icon from 'icon';

export default class extends Component {
	render() {
		const item = this.props.meta;

		return (
			<div href={ item.link } className={ styles.item } role="banner">
				<Icon className={ styles.icon } theme={ item.icon } />
				<div className={ styles.body }>
					<h4 className={ styles.title }>{ item.title }</h4>
					<p className={ styles.description }>{ item.description }</p>
				</div>
				<Button href={ item.link + "#edit" } theme="secondary" className={ styles.button }>Edit</Button>
			</div>
		);
	}
}
