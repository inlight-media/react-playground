import React, { Component } from 'react';
import { Route } from 'react-router';

// Views
import LocationsList from 'locations/list';
import LocationsNew from 'locations/new';

export default class Locations extends Component {
	render() {
		return (
			<Route path="locations" component={ LocationsList }>
				<Route path="list" component={ LocationsList } />
				<Route path="new" component={ LocationsNew } />
			</Route>
		);
	}
}
