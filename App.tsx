import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/home/Home';
import {Account} from './src/account/Account';
import {Todo} from './src/todo/Todo';
import {Counter} from './src/counter/Counter';

export type RootStackParamList = {
  Home: any;
  Todo: any;
  Counter: any;
  Account: any;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
