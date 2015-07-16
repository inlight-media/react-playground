import React, { Component } from 'react';
import { Route } from 'react-router';

// Views
import LocationsList from 'zones';

export default class Zones extends Component {
	render() {
		return (
			<Route path="zones" component={ Zones } />
		);
	}
}
