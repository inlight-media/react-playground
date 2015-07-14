import React, { Component } from 'react';
import styles from './style.css';
import Item from './item';
import ButtonSet from '../button-set';

export default class List extends Component {
	buildItems(items) {
		return items.map(function(item) {
			return (
				<Item link={ item.link }>
					{ item.label }
					<ButtonSet buttons={ item.buttons } />
				</Item>
			);
		});
	}

	render() {
		return (
			<ul className={ styles.container }>
				{ this.buildItems(this.props.items) }
			</ul>
		);
	}
}
