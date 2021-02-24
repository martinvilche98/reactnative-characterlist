import React, {Component} from 'react';
import {View,Text,TextInput, StyleSheet } from 'react-native';

export class SearchBar extends Component {

	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.bold}>Search:</Text>
				<TextInput style={styles.textField} onChangeText={(text) => {this.props.filterMethod(text)}}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent:'flex-start',
	},
	textField:{
		borderWidth: 2,
		borderColor: '#777',
		borderRadius: 10,
		display: 'flex',
		minWidth: 250,
		height: 40,
		paddingLeft: 10
	},
	bold: {
        fontWeight: 'bold'
    },
})