// Outro exemplo de flatlist, desta vez buscando dados da api JSONplaceholder
// Outro exemplo também buscando a PokeAPI, com os nomes e informações dos pokemons

import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Image, ScrollView } from 'react-native'
import axios from 'axios'

class Training02 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			// imageIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151]
		};
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/photos/')
			// axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
			.then((response) => {
				// console.log(response.data.results);
				console.log(response.data)

				this.setState({
					// data: response.data.results
					data: response.data
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList scrollEnabled={true} showsVerticalScrollIndicator={false}
					data={this.state.data}
					renderItem={({ item }) => {
						return (
							<View style={styles.listItem}>
								<View style={{paddingTop: 15}}>
									<Image
										style={{ width: 50, height: 50 }}
										source={{ uri: item.url }}
									/>
								</View>

								<View style={{ flex: 1 }}>
									<Text style={styles.textList}>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</Text>
								</View>

							</View>
						)
					}
					}
				/>
				{/* <FlatList scrollEnabled={true} showsVerticalScrollIndicator={false}
					data={this.state.data}
					renderItem={({ item }) => {
						return (
							<View style={styles.listItem}>
								<Text style={styles.textList}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
							</View>
						)
					}
					}
				/> */}
			</View>
		);
	}
}


{/* <FlatList scrollEnabled={true} showsVerticalScrollIndicator={false}
					data={this.state.imageIds}
					renderItem={({ item }) => {
						return (
							<View style={styles.listItem}>
								<Image
									style={{ width: 100, height: 100 }}
									source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${item}.png` }}
								/>
								<Text style={styles.textList}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
							</View>
						)
					}
					}
				/> */}


const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	listItem: {
		flexDirection: 'row',
		padding: 20,
		paddingTop: 5,
		borderBottomWidth: 1,
		borderColor: '#eceff1',
		alignItems: 'center'
	},
	textList: {
		fontSize: 15,
		// padding: 20,
		paddingTop: 5,
		paddingLeft: 10
	}
});

Training02.navigationOptions = {
	title: 'Treino React Native - 02',
};

export default Training02;

// import React, { Component } from 'react';
// //import react in our code.
// import { StyleSheet, FlatList, Text, View, Alert, TouchableOpacity } from 'react-native';
// //import all the components we are going to use.

// export default class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			FlatListItems: [
// 				{ id: '1', value: 'A' },
// 				{ id: '2', value: 'B' },
// 				{ id: '3', value: 'C' },
// 				{ id: '4', value: 'D' },
// 				{ id: '5', value: 'E' },
// 				{ id: '6', value: 'F' },
// 				{ id: '7', value: 'G' },
// 				{ id: '8', value: 'H' },
// 				{ id: '9', value: 'I' },
// 				{ id: '10', value: 'J' },
// 				{ id: '11', value: 'K' },
// 				{ id: '12', value: 'L' },
// 				{ id: '13', value: 'M' },
// 				{ id: '14', value: 'N' },
// 				{ id: '15', value: 'O' },
// 				{ id: '16', value: 'P' },
// 				{ id: '17', value: 'Q' },
// 				{ id: '18', value: 'R' },
// 				{ id: '19', value: 'S' },
// 				{ id: '20', value: 'T' },
// 				{ id: '21', value: 'U' },
// 				{ id: '22', value: 'V' },
// 				{ id: '23', value: 'W' },
// 				{ id: '24', value: 'X' },
// 				{ id: '25', value: 'Y' },
// 				{ id: '26', value: 'Z' },
// 				{ id: ' ' , value: ' ' }
// 			],
// 		};
// 	}

// 	GetItem(item) {
// 		//Function for click on an item
// 		Alert.alert(item);
// 	}

// 	render() {
// 		return (
// 			<View>
// 				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 40}}>
// 					<Text style={{ fontSize: 30}}>Alfabeto</Text>
// 				</View>

// 				<FlatList
// 					data={this.state.FlatListItems}

// 					renderItem={({ item }) => (

// 						<TouchableOpacity
// 							activeOpacity={.5}
// 							style={styles.MainContainer}
// 							onPress={this.GetItem.bind(this, `Posição: ${item.id} Letra: ${item.value}`)}>
// 							<Text style={styles.item}> {item.value} </Text>
// 						</TouchableOpacity>
// 					)}
// 				/>
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	MainContainer: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		marginBottom: 10,
// 		borderBottomWidth: 0.5,
// 		borderColor: '#C8C8C8'
// 	},

// 	item: {
// 		padding: 20,
// 		fontSize: 14,
// 		fontWeight: 'bold'
// 	},
// });
