import React, { Component } from 'react';
import styles from './style.css';

import Title from 'title';
import Notice from 'notice';
import ButtonSet from 'button-set';
import Button from 'button';
import InputGroup from 'input-group';
import Dropdown from 'dropdown';
import Line from 'line';
import Input from 'input';
import { Form, FormGroup, FormFooter } from 'form';
import Wrapper from 'wrapper';

// Temp data
import data from './data';

export default class extends Component {
	render() {
		return (
			<div className={ styles.container }>
				<Notice title="Campaigns" description="You're now ready to create your first campaign. A campaign handles the delivery of your content to a users device when they come within range of a beacon." />
				<Wrapper>
					<Title label="Campaigns » New Campaign" className={ styles.title } line />
					<Form>
						<FormGroup>
							<InputGroup label="Title">
								<Input />
							</InputGroup>

							<InputGroup label="Notification">
								<Input />
							</InputGroup>

							<InputGroup label="Template">
								<Dropdown options={ data.dropdown } />
							</InputGroup>
						</FormGroup>

						<Line />

						<FormGroup>
							<InputGroup label="Description">
								<Input />
							</InputGroup>

							<InputGroup label="Trigger" tooltip="Lorem Ipsum">
								<Dropdown options={ data.dropdown } />
							</InputGroup>

							<InputGroup label="Limit" tooltip="Lorem Ipsum">
								<Dropdown options={ data.dropdown } />
							</InputGroup>
						</FormGroup>

						<Line />

						<FormGroup title="Scheduling">
							<InputGroup label="Start Date">
								<Dropdown options={ data.dropdown } />
							</InputGroup>
						</FormGroup>

						<FormGroup>
							<InputGroup label="End Date">
								<Dropdown options={ data.dropdown } />
							</InputGroup>

							<InputGroup label="Time Zone" tooltip="Lorem Ipsum">
								<Dropdown options={ data.dropdown } />
							</InputGroup>
						</FormGroup>

						<FormGroup title="Activation Zones">
							<Button href="#" theme="primary">Add Zones</Button>
						</FormGroup>

						<Line />

						<FormFooter>
							<ButtonSet buttons={ data.buttons } />
						</FormFooter>
					</Form>
				</Wrapper>
			</div>
		);
	}
}

