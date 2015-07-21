import React, { Component } from 'react';
import styles from './style.css';

// @TODO: Resolve module directories in webpack config so we don't have to keep backtracking to components.
import List from 'list';
import Title from 'title';
import Button from 'button';

import items from './data'

export default class LocationList extends Component {
	render() {
		return (
			<div className={ styles.container }>
				<Title label="Locations">
					<Button theme="primary">Test</Button>
				</Title>
				<List items={ items } />
			</div>
		);
	}
}

