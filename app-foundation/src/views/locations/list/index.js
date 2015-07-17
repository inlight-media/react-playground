import React, { Component } from 'react';
import styles from './style.css';

// @TODO: Resolve module directories in webpack config so we don't have to keep backtracking to components.
import List from 'list';
import Dropdown from 'dropdown';

var items = [
	{
		link:"http://www.google.com",
		title: "Google",
		description: "A great search engine",
		buttons: [
			{
				theme: "primary",
				href: "/accept",
				label: "Lorem"
			},
			{
				theme: "success",
				href: "/deny",
				label: "Lorem"
			}
		]
	},
	{
		link:"http://www.bing.com",
		title: "Bing",
		description: "An ok search engine",
		buttons: [
			{
				theme: "primary",
				href: "/deny",
				label: "Lorem"
			}
		]
	},
	{
		link:"http://www.ask.com",
		title: "Ask",
		description: "Non-existent",
		buttons: [
			{
				theme: "secondary",
				href: "/view",
				label: "Lorem"
			}
		]
	}
];

var options = [
	{
		value: 'one',
		label: 'One'
	},
	{
		value: 'two',
		label: 'Two'
	},
];

var defaultOption = 'two';

export default class LocationList extends Component {
	render() {
		return (
			<div className={ styles.container }>
				<List items={ items } />
				<Dropdown options={ options } value={ defaultOption } />
			</div>
		);
	}
}

