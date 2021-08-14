import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from "./ components/Header/Header";
import Form from "./ components/Form/Form";
import ItemList from "./ components/ItemList/ItemList";

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: 1},
    {text: 'create an application', key: 2},
    {text: 'play on the switch', key: 3}
  ])

  const onPressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(item => item.key !== key);
    })
  }

  const onSubmitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{text, key: Date.now()}, ...prevTodos]
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <Form onSubmitHandler={onSubmitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
                <ItemList item={item} onPressHandler={onPressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {

  },
  list: {
    marginTop: 40
  }
});
