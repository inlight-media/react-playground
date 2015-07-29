const React = require('react-native');
const { StyleSheet } = React;
const config = require('../../config');

module.exports = StyleSheet.create({
	form: {
		borderTopWidth: config.height.line,
		borderBottomWidth: config.height.line,
		borderColor: config.color.border
	},
});
