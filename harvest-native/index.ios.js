const React = require('react-native');
const { Component, AppRegistry, ScrollView, View } = React;

const { Dropdown, Field, Form, NavBar, Input } = require('./App/components');
const styles = require('./styles');

class Window extends Component {
	render() {
		const options = [
			{
				value: "lorem-ipsum",
				label: "Lorem ipsum"
			},
			{
				value: "dolor-sit-amet",
				label: "Dolor Sit Amet"
			},
			{
				value: "consectetur-adipisicing",
				label: "Consectetur Adipisicing"
			}
		];

		return (
			<View style={ styles.app }>
				<NavBar>Harvest Tracker</NavBar>

				<ScrollView style={ styles.main }>
					<Form>
						<Field text="Date / Day">
							<Dropdown text="Select an item" options={ options } value={ options[1].value } />
						</Field>

						<Field text="Time Taken">
							<Input placeholder="Time Taken" />
						</Field>

						<Field text="Project">
						</Field>

						<Field text="Task">
						</Field>

						<Field text="Notes">
							<Input placeholder="Notes" />
						</Field>

						<Field text="People" last>
						</Field>
					</Form>
				</ScrollView>
			</View>
		);
	}
};

AppRegistry.registerComponent('NativeTest', () => Window);
