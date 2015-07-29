const React = require('react-native');
const { PixelRatio } = React;

module.exports = {
	color: {
		primary: '#f36c00',
		border: '#C8C8C8'
	},
	padding: {
		button: 8,
		input: 15
	},
	height: {
		input: 40,
		line: 1 / PixelRatio.get()
	}
};


