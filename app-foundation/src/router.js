import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';

// Components
import App from './app'
import NotFound from 'not-found'

import LocationsList from 'locations/list';
import LocationsNew from 'locations/new';

import ZonesList from 'zones/list';
import ZonesNew from 'zones/new';

React.render((
	<Router history={ history }>
		<Route path="/" component={ App }>

			// Locations - @TODO: Indent this.
			<Route path="locations" component={ LocationsList } />
			<Route path="locations/list" component={ LocationsList } />
			<Route path="locations/new" component={ LocationsNew } />

			// Zones
			<Route path="zones" component={ ZonesList } />
			<Route path="zones/new" component={ ZonesNew } />

			<Route path="*" component={ NotFound } />
		</Route>
	</Router>
), document.body);


