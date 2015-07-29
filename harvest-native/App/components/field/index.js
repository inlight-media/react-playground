const React = require('react-native');
const { Component, Text, View } = React;

const styles = require('./styles');

module.exports = class extends Component {
	render() {

		let line;
		if (!this.props.last) {
			line = (<View style={ styles.line } />);
		}

		return (
			<View style={ styles.field }>
				<View style={ styles.body }>
					<Text style={ styles.text }>{ this.props.text }</Text>
					<View style={ styles.children }>
						{ this.props.children }
					</View>
				</View>
				{ line }
			</View>
		);
	}
};
