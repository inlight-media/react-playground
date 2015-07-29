const React = require('react-native');
const { StyleSheet } = React;
const config = require('../../config');

module.exports = StyleSheet.create({
	field: {
		backgroundColor: '#fff'
	},
	text: {
		fontSize: 16,
		width: 100,
		lineHeight: 30,
		height: config.height.input,
	},
	children: {
		flex: 1
	},
	line: {
		backgroundColor: config.color.border,
		marginLeft: 15,
		// Trick to get the thinest line the device can display
		height: config.height.line
	},
	body: {
		flexDirection: 'row',
		paddingVertical: 8,
		paddingHorizontal: 15
	}
});
