import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import styles from './style.css';

export default class Item extends Component {
	render() {
		const classes = classNames(
			styles.item
		);

		return (
			<li className={ classes }>
				<Link to={ this.props.link } activeClassName={ styles.active } className={ styles.anchor }>{ this.props.children }</Link>
			</li>
		);
	}
};


