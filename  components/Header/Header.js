import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>To do list</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'coral',
        height: 80,
        paddingTop: 38,
    },
    headerText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})