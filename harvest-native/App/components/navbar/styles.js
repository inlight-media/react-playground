const React = require('react-native');
const config = require('../../config');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
	header: {
		paddingTop: 30,
		paddingBottom: 10,
		paddingHorizontal: 10,
		backgroundColor: config.color.primary,
		flexDirection: 'row'
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#fff',
		flex: 1,
		marginVertical: config.padding.button
	},
	button: {
		fontSize: 16
	}
});
