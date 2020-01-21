// import React, { Component } from 'react'
// import { Text, View, FlatList, StyleSheet } from 'react-native'

// class Training02 extends Component {
// 	render() {

// 		const dados = [
// 			{ key: 'Fernanda' },
// 			{ key: 'Daniel' },
// 			{ key: 'Michael' },
// 			{ key: 'Jackson' },
// 			{ key: 'James' },
// 			{ key: 'Matheus' },
// 			{ key: 'Johnatan' },
// 			{ key: 'William' },
// 			{ key: 'Jimmy' },
// 			{ key: 'Marcus' },
// 			{ key: 'Dnilo' },
// 			{ key: 'Rafael' },
// 			{ key: 'Caio' },
// 			{ key: 'Maria' },
// 			{ key: 'Jose' },
// 			{ key: 'Joel' },
// 			{ key: 'Monique' },
// 			{ key: 'Lucas' },
// 			{ key: 'Amanda' },
// 			{ key: 'Eduardo' },
// 		];

// 		return (
// 			<View style={styles.container}>
// 				<FlatList
// 					data={dados}
// 					renderItem={({ item }) =>
// 						<View>
// 							<Text style={{paddingLeft: 20, paddingTop: 5}}>Nome:</Text>
// 							<Text style={styles.textList}>{item.key}</Text>

// 						</View>
// 					}
// 				/>
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	},
// 	textList: {
// 		fontSize: 20,
// 		padding: 20,
// 		paddingTop: 5,
// 		borderBottomWidth: 1,
// 		borderColor: '#eceff1'
// 	}
// });

// Training02.navigationOptions = {
// 	title: 'Treino React Native - 02',
// };

// export default Training02;

import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, FlatList, Text, View, Alert, TouchableOpacity } from 'react-native';
//import all the components we are going to use.

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			FlatListItems: [
				{ id: '1', value: 'A' },
				{ id: '2', value: 'B' },
				{ id: '3', value: 'C' },
				{ id: '4', value: 'D' },
				{ id: '5', value: 'E' },
				{ id: '6', value: 'F' },
				{ id: '7', value: 'G' },
				{ id: '8', value: 'H' },
				{ id: '9', value: 'I' },
				{ id: '10', value: 'J' },
				{ id: '11', value: 'K' },
				{ id: '12', value: 'L' },
				{ id: '13', value: 'M' },
				{ id: '14', value: 'N' },
				{ id: '15', value: 'O' },
				{ id: '16', value: 'P' },
				{ id: '17', value: 'Q' },
				{ id: '18', value: 'R' },
				{ id: '19', value: 'S' },
				{ id: '20', value: 'T' },
				{ id: '21', value: 'U' },
				{ id: '22', value: 'V' },
				{ id: '23', value: 'W' },
				{ id: '24', value: 'X' },
				{ id: '25', value: 'Y' },
				{ id: '26', value: 'Z' },
				{ id: ' ' , value: ' ' }
			],
		};
	}

	GetItem(item) {
		//Function for click on an item
		Alert.alert(item);
	}

	render() {
		return (
			<View>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 40}}>
					<Text style={{ fontSize: 30}}>Alfabeto</Text>
				</View>

				<FlatList
					data={this.state.FlatListItems}

					renderItem={({ item }) => (

						<TouchableOpacity
							activeOpacity={.5}
							style={styles.MainContainer}
							onPress={this.GetItem.bind(this, `Posição: ${item.id} Letra: ${item.value}`)}>
							<Text style={styles.item}> {item.value} </Text>
						</TouchableOpacity>
					)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	MainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
		borderBottomWidth: 0.5,
		borderColor: '#C8C8C8'
	},

	item: {
		padding: 20,
		fontSize: 14,
		fontWeight: 'bold'
	},
});
