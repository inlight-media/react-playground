import React, { Component } from 'react';
import styles from './style.css';

// @TODO: Resolve module directories in webpack config so we don't have to keep backtracking to components.
import List from 'list';
import Title from 'title';
import Button from 'button';
import Filter from 'filter';
import Wrapper from 'wrapper';

import data from './data'

export default class ZoneList extends Component {
	render() {
		return (
			<div className={ styles.container }>
				<Wrapper>
					<Title label="Zones">
						<Button href="/zones/new" theme="primary">New Zone</Button>
					</Title>
					<Filter dropdowns={ data.dropdowns } dropdownClass={ styles.dropdown }/>
					<List items={ data.items } />
				</Wrapper>
			</div>
		);
	}
}

