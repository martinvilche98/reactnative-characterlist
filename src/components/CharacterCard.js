import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

export const CharacterCard = ({character, deleteFunc}) => {
		return (
            <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={[styles.name, styles.bold]}>{`${character.name}`}</Text>
                <Text style={styles.infoValue}><Text style={styles.bold}>Gender: </Text>{`${character.gender}`}</Text>
                <Text style={styles.infoValue}><Text style={styles.bold}>Eye color:</Text>{` ${character.eye_color}`}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="X" onPress={() => deleteFunc(character.name)}/>
            </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ACD8',
		height: 70,
        margin: 4,
		marginBottom: 2,
        padding: 5
    },
    infoContainer:{},
    buttonContainer:{
        display: 'flex',
        marginLeft: 'auto',
        justifyContent: 'flex-start'
    },
    bold: {
        fontWeight: 'bold'
    },
    name: {
        fontSize: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#777',
        alignSelf: 'flex-start' 
    },
    infoValue: {
        fontSize: 12,
    }
});