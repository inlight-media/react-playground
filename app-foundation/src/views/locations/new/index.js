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

export default class LocationNew extends Component {
	render() {
		return (
			<div className={ styles.container }>
				<Notice title="Branches" description="Before you get started you'll need to setup one or more locations. Examples of locations include branches, shops, venues, galleries, events, stadiums or workplaces." />
				<Wrapper>
					<Title label="Locations » New Branch" />
					<ButtonSet buttons={ buttons } />
				</Wrapper>
			</div>
		);
	}
}

