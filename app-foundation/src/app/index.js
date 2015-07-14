import React from 'react';

import Header from '../components/header';
import Home from '../views/home';

import styles from './style.css';
import reset from './reset.css';

React.render(
	<div className={styles.app}>
		<Header />
		<Home />
	</div>
	, document.body);
