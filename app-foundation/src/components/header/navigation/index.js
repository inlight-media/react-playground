import React, { Component } from 'react';
import styles from './style.css';
import Item from './item';

const items = [
	{
		link:"/locations",
		label: "Locations"
	},
	{
		link:"/zones",
		label: "Zones"
	}
];

export default class Navigation extends Component {
	buildItems(items) {
		return items.map(item => ( <Item link={ item.link }>{ item.label }</Item> ));
	}

	render() {
		return (
			<nav className={ styles.container } role="navigation">
				<ul>
					{ this.buildItems(items) }
				</ul>
			</nav>
		);
	}
}
