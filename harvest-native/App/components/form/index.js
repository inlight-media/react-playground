const React = require('react-native');
const { Component, Text, View } = React;

const styles = require('./styles');

module.exports = class extends Component {
	render() {
		return (
			<View style={ styles.form }>
				{ this.props.children }
			</View>
		);
	}
};
