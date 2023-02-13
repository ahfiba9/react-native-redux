import * as React from 'react';
import { Text, TextInput, View, StyleSheet, FlatList } from "react-native";
import { TodoButton } from "./TodoButton";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,deleteTodo } from "./redux/todoStates";
import { RowBase } from "../commonUi/RowBase";
import { GlobalState } from "../redux/store";
import { RowTodo } from "./RowTodo";

export const Todo = () => {
  const dispatch = useDispatch()
  const [text, onChangeText] = React.useState('');

  const todoList = useSelector((state: GlobalState) => state.todoStates.todo)

  const handleAddTodo = () => {
    dispatch(addTodo({todo: text}))
    onChangeText('')
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 50}}>
      <Text>Todo Screen</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TodoButton title={'Add Todo'} onPress={handleAddTodo}/>
      </View>
      <FlatList
        data={todoList}
        renderItem={({ item }) => <RowTodo title={item.title} onPress={() => dispatch(deleteTodo({ id: item.id }))}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
});
