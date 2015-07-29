import React, { Component } from 'react';
import styles from './style.css';
import Item from './item';

export default class extends Component {
	buildItems(items) {

		return items.map(function(item) {
			return (
				<Item meta={ item } />
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
