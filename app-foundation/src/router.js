import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

// Components
import App from '../app/'
import NotFound from 'not-found'
import Zones from 'zones';
import LocationsList from 'locations/list';
import LocationsNew from 'locations/new';

React.render((
	<Router history={ history }>
		<Route path="/" component={ App }>

			// Locations
			<Route path="locations" component={ LocationsList }>
				<Route path="list" component={ LocationsList } />
				<Route path="new" component={ LocationsNew } />
			</Route>

			// Zones
			<Route path="zones" component={ Zones } />

			<Route path="*" component={ NotFound } />
		</Route>
	</Router>
), document.body);


