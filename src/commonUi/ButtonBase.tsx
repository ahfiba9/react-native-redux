import * as React from 'react';
import { Button, StyleProp, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextStyle } from "react-native";

interface Props {
  title: string;
  onPress: () => void
  buttonStyle?: StyleProp<any>;
  textStyle?: StyleProp<TextStyle>;
}

export const ButtonBase = (props: Props) => {
  return (
      <TouchableOpacity style={[styles.container, props.buttonStyle]} onPress={props.onPress}>
        <Text style={[styles.title, props.textStyle]}>{props.title}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#147EFB',
    padding: 10,
    borderRadius: 10,
    width: 100,
    alignItems: 'center'
  },
  title: {
    color: '#fff'
  }
})
