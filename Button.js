import React, { Component } from 'react';
import { Text, Button, StyleSheet, View, TextInput } from 'react-native';

class ButtonBasics extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			displayText: '',
			btnColor: 'orange'
		};
	}

	onPressButton = () => {
		if (this.state.btnColor === "orange") {
			this.state.btnColor = "#e64a19";
		}
		else {
			this.state.btnColor = "orange";
		}
		this.setState({
			displayText: this.state.text
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{padding: 20}}>
					<Text style={{ fontSize: 30, textAlign: 'center', alignSelf: 'center'}}>{this.state.displayText}</Text>
				</View>

				<TextInput placeholder="Digite algo..." style={styles.input} onChangeText={text => this.setState({ text })} />
				<View style={styles.buttonContainer}>
					<Button onPress={this.onPressButton} color={this.state.btnColor} title="Alterar" />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'lightgrey',
	},
	buttonContainer: {
		justifyContent: 'center',
		width: 200,
		margin: 10,
	},
	input: {
		margin: 10,
		width: 210,
		padding: 8,
		paddingLeft: 15,
		// borderWidth: .5,
		borderRadius: 20,
		backgroundColor: 'white'
	}
});

export default ButtonBasics;