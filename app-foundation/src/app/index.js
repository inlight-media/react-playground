import React from 'react';

import Header from '../components/header';
import Main from '../components/main';

import styles from './style.css';
import reset from './reset.css';

React.render(
	<div className={styles.app}>
		<Header />
		<Main />
	</div>
	, document.body);
