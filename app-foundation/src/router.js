import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

// Components
import App from './app'
import NotFound from 'not-found'

import { LocationList, LocationNew } from 'location';
import { ZoneList, ZoneNew } from 'zone';
import { CampaignList, CampaignNew } from 'campaign';

React.render((
	<Router history={ history }>
		<Route path="/" component={ App }>

			// Locations - @TODO: Indent this.
			<Route path="locations" component={ LocationList } />
			<Route path="locations/list" component={ LocationList } />
			<Route path="locations/new" component={ LocationNew } />

			// Zones
			<Route path="zones" component={ ZoneList } />
			<Route path="zones/new" component={ ZoneNew } />

			// Campaigns
			<Route path="campaigns" component={ CampaignList } />
			<Route path="campaigns/new" component={ CampaignNew } />

			<Route path="*" component={ NotFound } />
		</Route>
	</Router>
), document.body);


