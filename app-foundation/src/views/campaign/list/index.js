import React, { Component } from 'react';
import styles from './style.css';

// @TODO: Resolve module directories in webpack config so we don't have to keep backtracking to components.
import List from 'list';
import Title from 'title';
import Button from 'button';
import Filter from 'filter';
import Wrapper from 'wrapper';

import data from './data'

export default class extends Component {
	render() {
		let button = {
			href: "/campaigns/new",
			label: "New Campaign"
		};

		return (
			<div className={ styles.container }>
				<Wrapper>
					<Title label="Campaigns" button={ button } />
					<Filter dropdowns={ data.dropdowns } />
					<List items={ data.items } />
				</Wrapper>
			</div>
		);
	}
}

