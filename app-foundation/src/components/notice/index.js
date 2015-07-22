import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

import Icon from 'icon';
import Wrapper from 'wrapper';

export default class Notice extends Component {
	render() {
		return (
			<div className={ styles.notice }>
				<Wrapper>
					<a className={ styles.close } href="#">
						<Icon theme="close" />
					</a>

					<h2 className={ styles.title }>
						<Icon theme="help" className={ styles.helpIcon } /> { this.props.title }
					</h2>
					<p className={ styles.paragraph }>{ this.props.description }</p>
					<ul className={ styles.list }>
						<li>
							<a href="#">Hide</a>
						</li>
						<li>
							<a href="#">Don't show this again</a>
						</li>
					</ul>
				</Wrapper>
			</div>
		);
	}
}

