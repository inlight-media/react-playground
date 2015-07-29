const React = require('react-native');
const config = require('../../config');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
	button: {
		padding: config.padding.button,
		backgroundColor: config.color.primary,
		borderColor: '#fff',
		borderRadius: 3,
		borderWidth: 1
	},
	text: {
		textAlign: 'center',
		color: '#fff'
	}
});
