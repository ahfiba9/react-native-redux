import * as React from 'react';
import { ButtonBase } from './ButtonBase'
import { StyleProp, StyleSheet } from "react-native";

interface Props {
  title: string
  onPress: () => void
  style?: StyleProp<any>
}

export const RowBase = (props: Props) => {
  return (
    <ButtonBase title={props.title} onPress={props.onPress} buttonStyle={[styles.container, props.style]}/>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
    marginVertical: 3
  },
})
