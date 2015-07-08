import React from 'react';
import styles from './style.css';
import Item from './item';

var items = [
	{
		link:"http://www.google.com",
		label: "Google"
	},
	{
		link:"http://www.bing.com",
		label: "Bing"
	},
	{
		link:"http://www.ask.com",
		label: "Ask"
	}
];

export default class Sidebar extends React.Component {
	buildItems(items) {
		return items.map(item => ( <Item link={ item.link }>{ item.label }</Item> ));
	}

	render() {
		return (
			<aside className={ styles.container }>
				{ this.buildItems(items) }
			</aside>
		);
	}
}
