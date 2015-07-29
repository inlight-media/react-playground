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
	},
	{
		link:"/campaigns",
		label: "Campaigns"
	}
];

export default class extends Component {
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
