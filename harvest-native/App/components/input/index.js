const React = require('react-native');
const { Component, TextInput, View } = React;
const config = require('../../config');

const styles = require('./styles');

module.exports = class extends Component {
	render() {
		return (
			<View>
				<TextInput style={ styles.input } onChangeText={(text) => this.setState({text})} placeholder={ this.props.placeholder } />
			</View>
		);
	}
};
