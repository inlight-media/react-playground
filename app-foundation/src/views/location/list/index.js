import React, { Component } from 'react';
import styles from './style.css';

// @TODO: Resolve module directories in webpack config so we don't have to keep backtracking to components.
import List from 'list';
import Title from 'title';
import Button from 'button';
import Wrapper from 'wrapper';

import items from './data'

export default class LocationList extends Component {
	render() {
		let button = {
			href: "/locations/new",
			label: "New Branch"
		};

		return (
			<div className={ styles.container }>
				<Wrapper>
					<Title label="Locations" button={ button } />
					<List items={ items } />
				</Wrapper>
			</div>
		);
	}
}

