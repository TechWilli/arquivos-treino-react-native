import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native'
import { Icon } from 'native-base'

// SHIFT + ALT + F identa todo o código

const { height } = Dimensions.get('screen');

class Training01 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0,
			result: 0,
			txtColor: 'black'
		};

		// usando arrow function não precisa fazer o bind()

		// this.somar = this.somar.bind(this);
		// this.zerar = this.zerar.bind(this);
		// this.subtrair = this.subtrair.bind(this);
	}

	somar = () => this.setState({ result: this.state.num += 1 });

	subtrair = () => this.setState({ result: this.state.num -= 1 });

	zerar = () => this.setState({ num: 0, result: 0 });

	chooseNumber = (texto) => {
		this.setState({
			num: Number(texto)
		});
	}

	setNumber = () => {
		if (isNaN(this.state.num)) {
			this.setState({ txtColor: 'red', result: 'Error' })
			setTimeout(() => this.setState({ txtColor: 'black', result: 0, num: 0 }), 750);

		} else {
			this.setState({ result: this.state.num });
		}

	}

	clean = () => {
		this.setState({})
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.container}>

						<View style={styles.title}>
							<Text style={{ fontSize: 40, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>CONTADOR</Text>
						</View>

						<View style={styles.card}>
							<Text style={{ fontSize: 60, textAlign: 'center', color: this.state.txtColor }}> {this.state.result} </Text>

							<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
								<TouchableOpacity activeOpacity={.60} style={styles.btnDecrease} onPress={this.subtrair}>
									<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>SUBTRAIR</Text>
								</TouchableOpacity>

								<TouchableOpacity activeOpacity={.60} style={styles.btnIncrease} onPress={this.somar}>
									<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>SOMAR</Text>
								</TouchableOpacity>
							</View>

							<TouchableOpacity activeOpacity={.60} style={styles.btnReset} onPress={this.zerar}>
								<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>ZERAR</Text>
							</TouchableOpacity>
						</View>

						<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15, marginRight: 20 }}>
							<TextInput placeholder='Digite um número...'
								keyboardType='numeric'
								onChangeText={texto => this.chooseNumber(texto)}
								style={styles.input} />
							<Icon name="close" style={{ marginLeft: -35 }} onPress={this.clean} />
						</View>
						<TouchableOpacity activeOpacity={.60} style={styles.btnSetNumber} onPress={this.setNumber}>
							<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>ENTER</Text>
						</TouchableOpacity>


					</View>
				</ScrollView>
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
		height: 467,
		// paddingTop: '13.3%'
	},
	btnIncrease: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '10%',
		height: 40,
		backgroundColor: 'orange',
		borderTopRightRadius: 40,
		borderBottomRightRadius: 40

	},
	btnDecrease: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '10%',
		height: 40,
		backgroundColor: '#ffbd45',
		borderTopLeftRadius: 40,
		borderBottomLeftRadius: 40

	},
	btnReset: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: 40,
		backgroundColor: '#b53d00',
		marginTop: 10,
		marginBottom: 25,
		borderRadius: 40
	},
	btnSetNumber: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 250,
		height: 40,
		backgroundColor: 'orange',
		marginTop: 15,
		borderRadius: 40,
	},
	card: {
		backgroundColor: 'white',
		paddingRight: 20,
		paddingLeft: 20,
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 20,
		width: 250
	},
	title: {
		backgroundColor: 'orange',
		padding: 10,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		width: 250
	},
	input: {
		backgroundColor: 'white',
		borderRadius: 20,
		width: 250,
		height: 45,
		paddingLeft: 25,
		// marginTop: 15
	}
});

export default Training01;