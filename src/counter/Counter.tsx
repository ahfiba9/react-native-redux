import * as React from 'react';
import {Text, View} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "../redux/store";
import { CounterButton } from "./CounterButton";
import { addCounter, minusCounter, resetCounter } from "./redux/counterStates";


export const Counter = () => {
  const counter = useSelector((state: GlobalState) => state.counterStates.counter)
  const dispatch = useDispatch()
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Counter Screen</Text>
      <Text>Current counter: {counter}</Text>
      <CounterButton title={'Add'} onPress={() => dispatch(addCounter())}/>
      <CounterButton title={'Minus'} onPress={() => dispatch(minusCounter())}/>
      <CounterButton title={'Reset'} onPress={() => dispatch(resetCounter())}/>
    </View>
  );
};
