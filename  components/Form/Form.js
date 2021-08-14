import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default function Form({onSubmitHandler}){
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

    return(
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder={'Enter to do...'}
                onChangeText={changeHandler}
            />
            <Button
                title={'Add to do'}
                color={'coral'}
                onPress={() => onSubmitHandler(text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20,
    },
    input: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        marginBottom: 10
    }
})