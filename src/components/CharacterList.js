import React, {Component} from 'react';
import {ScrollView, StyleSheet, View } from 'react-native';
import {API_URL} from '../api/urls'
import {CharacterCard} from './CharacterCard'
import {SearchBar} from './SearchBar'

export class CharacterList extends Component {

	state = {
		characters: [],
		filter: "",
	}

	componentDidMount(){
		this.fetchData();
		this.setState({filterArray: this.state.characters})
	}

	fetchData = async () => {
		const response = await fetch(API_URL);
		const json = await response.json();
		this.setState({characters: json.results});
	}

	filterItem = (name) => {
		console.log(name)
		this.setState({ filter: name });
	}

	onDelete = (name) => {
		let arr = this.state.characters;
		let filteredArray = arr.filter( (val) => name !== val.name)
		this.setState({ characters: filteredArray });
	}

	render () {
		return (
			<View style={styles.container}>
				<SearchBar filterMethod={this.filterItem}/>
      			<ScrollView>
				{
					this.state.characters.map((item,index)=>{
								if(this.state.filter.length == 0 || item.name.includes(this.state.filter))
									return <CharacterCard key={index} character={item} deleteFunc={this.onDelete}/>
					})
				}
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center'
	},
});