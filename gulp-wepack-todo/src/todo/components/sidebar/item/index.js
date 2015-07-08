import React from 'react'
import styles from './style.css'

export default class Item extends React.Component {
	render() {
		return (
			<li className={ styles.container }>
				<a href={ this.props.link }>{this.props.children}</a>
			</li>
		);
	}
};
