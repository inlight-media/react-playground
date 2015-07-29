const React = require('react-native');
const { Component, PickerIOS, View } = React;

const PickerItemIOS = PickerIOS.Item;

const styles = require('./styles');

module.exports = class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value
		};
	}

	buildOptions(options) {
		return options.map(function(option) {
			return (
				<PickerItemIOS value={ option.value } key={ option.value } label={ option.label } />
			);
		});
	}

	render() {
		return (
				<PickerIOS selectedValue={ this.state.value } onValueChange={ (value) => this.setState({ value }) } style={ styles.dropdown }>
					{ this.buildOptions(this.props.options) }
				</PickerIOS>
		);
	}
};
