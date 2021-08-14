import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function ItemList ({item, onPressHandler}){
    return(
        <TouchableOpacity style={styles.form} onPress={() => onPressHandler(item.key)}>
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    form: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        borderStyle: 'dotted',
        borderColor: 'grey',
        borderWidth: 1
    },
    text: {
        alignItems: 'center',
        textAlign: 'center',
        padding: 20
    }
})