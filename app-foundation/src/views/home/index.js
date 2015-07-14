import React, { Component } from 'react';
import styles from './style.css';

// @TODO: Resolve module directories in webpack config so we don't have to keep backtracking to components.
import List from '../../components/list';
import Dropdown from '../../components/dropdown';

var items = [
	{
		link:"http://www.google.com",
		label: "Google",
		buttons: [
			{
				theme: "success",
				href: "/accept",
				label: "Accept"
			},
			{
				theme: "danger",
				href: "/deny",
				label: "Deny"
			}
		]
	},
	{
		link:"http://www.bing.com",
		label: "Bing",
		buttons: [
			{
				theme: "danger",
				href: "/deny",
				label: "Deny",
				size: "large"
			}
		]
	},
	{
		link:"http://www.ask.com",
		label: "Ask",
		buttons: [
			{
				theme: "info",
				href: "/view",
				label: "View"
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

export default class Home extends Component {
	render() {
		return (
			<div className={ styles.container }>
				<List items={ items } />
				<Dropdown options={ options } value={ defaultOption } />
			</div>
		);
	}
}

