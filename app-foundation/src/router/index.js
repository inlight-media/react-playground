import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

// Components
import App from '../app/'
import NotFound from 'not-found'

// Routes
// import Locations from './locations'
// <Locations />

import Zones from './zones'
console.log('Zones', Zones);

React.render((
	<Router history={ history }>
		<Route path="/" component={ App }>
			<Zones />
			<Route path="*" component={ NotFound } />
		</Route>
	</Router>
), document.body);
