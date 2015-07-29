const React = require('react-native');
const { StyleSheet } = React;
const config = require('../../config');

module.exports = StyleSheet.create({
	input: {
		backgroundColor: 'green',
		height: config.height.input,
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: config.padding.input,
		color: config.color.primary
	}
});
