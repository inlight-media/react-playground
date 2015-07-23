import React, { Component } from 'react';
import styles from './style.css';

import Title from 'title';
import Notice from 'notice';
import ButtonSet from 'button-set';
import InputGroup from 'input-group';
import Dropdown from 'dropdown';
import Line from 'line';
import Wrapper from 'wrapper';

// Temp data
import data from './data';

export default class LocationNew extends Component {
	render() {
		return (
			<div className={ styles.container }>
				<Notice title="Branches" description="Before you get started you'll need to setup one or more locations. Examples of locations include branches, shops, venues, galleries, events, stadiums or workplaces." />
				<Wrapper>
					<Title label="Locations » New Branch" className={ styles.title } line />

					<InputGroup label="Branch Name">
						<input type="text" />
					</InputGroup>

					<InputGroup label="Country">
						<Dropdown options={ data.countries } />
					</InputGroup>

					<InputGroup label="State">
						<Dropdown options={ data.states } />
					</InputGroup>

					<Line />

					<InputGroup label="Street Address">
						<input type="text" />
					</InputGroup>

					<InputGroup label="City">
						<input type="text" />
					</InputGroup>

					<InputGroup label="Post Code">
						<input type="text" />
					</InputGroup>

					<Line />

					<ButtonSet buttons={ data.buttons } />
				</Wrapper>
			</div>
		);
	}
}

