import React, { Component } from 'react';
import styles from './style.css';

import Title from 'title';
import Notice from 'notice';
import ButtonSet from 'button-set';
import Wrapper from 'wrapper';

var buttons = [
	{
		href: "#",
		label: "Cancel"
	},
	{
		href: "#",
		theme: "primary",
		label: "Save"
	}
];

export default class ZoneNew extends Component {
	render() {
		return (
			<div className={ styles.container }>
				<Notice title="Zones" description="Now that you've setup up a location you'll need to add one or more zones before you can trigger proximity campaigns. Think of zones as areas within each of your locations." />
				<Wrapper>
					<Title label="Zones » New Branch" line />
					<ButtonSet buttons={ buttons } />
				</Wrapper>
			</div>
		);
	}
}

