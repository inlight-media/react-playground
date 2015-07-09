import React, { Component } from 'react';
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

export default class Navigation extends Component {
	buildItems(items) {
		return items.map(item => ( <Item link={ item.link }>{ item.label }</Item> ));
	}

	render() {
		return (
			<nav className={ styles.container }>
				<ul>
					{ this.buildItems(items) }
				</ul>
			</nav>
		);
	}
}
