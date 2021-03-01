import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native'
import {CharacterCard} from './CharacterCard'
import {SearchBar} from './SearchBar'
import { connect } from 'react-redux'
import { fetchCharacterList } from '../redux/actions/characterListActions'

const CharacterList = (props) => {

	const {characterListReducer, fetchCharacterList} = props;
	const {characters} = characterListReducer
	const [characterList, setCharacterList] = useState([])
	const [searchFilter, setSearchBarFilter] = useState('')
	const [loading, setLoading] = useState(true)
    useEffect(() => {
			fetchCharacterList().then( res => {
				console.log(characters)
				setCharacterList(characters)
				setLoading(false)
			}).catch( err => console.log(err))
    }, [loading])

	// Called by CharacterCard delete button to remove itself from the list.
	const onDelete = (name) => {
		let filteredArray = characterList.filter( (val) => name !== val.name)
		setCharacterList(filteredArray)
	}


	const setFilter = (name) =>{
		setSearchBarFilter(name.toLowerCase())
	}

	const filterMatch = (name) => {
		return searchFilter.length == 0 || name.toLowerCase().includes(searchFilter)
	}

	return (
		<View style={styles.container}>
			<SearchBar filterMethod={setFilter}/>
			<ScrollView>
			{ 
				loading ? 
				<View style={styles.loadingContainer}><Text style={styles.loadingText}>Loading, Please Wait</Text></View>
				:
				characterList != null && characterList.map((item,index)=>{
					if(filterMatch(item.name))
						return <CharacterCard key={index} character={item} deleteFunc={onDelete}/>
				})
			}
			</ScrollView>
		</View>
	)
}
export {CharacterListView}

const mapStateToProps = (state) => ({
	characterListReducer: state.characterListReducer
})

const CharacterListView = connect( mapStateToProps, {fetchCharacterList} )(CharacterList)

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center'
	},
	loadingContainer: {
		display: 'flex',
		height: 300,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loadingText:{
		color: '#55F',
		fontWeight: 'bold'
	}
});