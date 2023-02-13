import * as React from "react";
import { View } from "react-native";
import { ButtonBase } from "../commonUi/ButtonBase";

interface Props {
  title: string
  onPress: () => void
};


export const CounterButton = (props: Props) => {
  const handleOnPress = () => {
    props.onPress()
  }

  return (
    <View style={{paddingVertical: 2}}>
      <ButtonBase title={props.title} onPress={handleOnPress}/>
    </View>
  );
};
