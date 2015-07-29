const React = require('react-native');
const { Component, Text, View } = React;

const styles = require('./styles');

module.exports = class extends Component {
	render() {
		return (
			<View style={ [styles.button, this.props.style] } onMagicTap={ this.props.handler ? this.props.handler : '' }>
				<Text style={ styles.text }>{ this.props.label }</Text>
			</View>
		);
	}
};
