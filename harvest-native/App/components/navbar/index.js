const React = require('react-native');
const { Component, StatusBarIOS, Text, View } = React;

const styles = require('./styles');

const Button = require('../button');

module.exports = class extends Component {
	render() {
		StatusBarIOS.setStyle('light-content', true);

		return (
			<View style={ styles.header }>
				<Button label="Cancel" style={ styles.button } />
				<Text style={ styles.title }>{ this.props.children }</Text>
				<Button label="Track" style={ styles.button } />
			</View>
		);
	}
};
