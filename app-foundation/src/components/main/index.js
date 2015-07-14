import React, { Component } from 'react';
import styles from './style.css';
import List from '../list';

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

export default class Main extends Component {
	render() {
		return (
			<div className={ styles.container }>
				<List items={ items } />
			</div>
		);
	}
}

