import React, { Component } from 'react';
import styles from './style.css';

import Title from 'title';
import Notice from 'notice';
import ButtonSet from 'button-set';
import InputGroup from 'input-group';
import Dropdown from 'dropdown';
import Line from 'line';
import Input from 'input';
import { Form, FormGroup, FormFooter } from 'form';
import Wrapper from 'wrapper';

// Temp data
import data from './data';

export default class ZoneNew extends Component {
	render() {
		return (
			<div className={ styles.container }>
				<Notice title="Zones" description="Now that you've setup up a location you'll need to add one or more zones before you can trigger proximity campaigns. Think of zones as areas within each of your locations." />
				<Wrapper>
					<Title label="Zones » New Branch" line />
					<Form>
						<FormGroup>
							<InputGroup label="Name">
								<Input />
							</InputGroup>

							<InputGroup label="Location">
								<Dropdown options={ data.locations } />
							</InputGroup>

							<InputGroup label="Type">
								<Dropdown options={ data.types } />
							</InputGroup>
						</FormGroup>

						<Line />

						<FormGroup>
							<InputGroup label="UUID" tooltip="Lorem Ipsum">
								<Dropdown options={ data.uuids } />
							</InputGroup>

							<InputGroup label="Major" tooltip="Lorem Ipsum">
								<Input />
							</InputGroup>

							<InputGroup label="Minor" tooltip="Lorem Ipsum">
								<Input />
							</InputGroup>

							<InputGroup label="Floor" tooltip="Lorem Ipsum">
								<Input />
							</InputGroup>
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

