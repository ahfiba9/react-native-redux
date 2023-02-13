import * as React from "react";
import { View } from "react-native";
import { ButtonBase } from "../commonUi/ButtonBase";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

interface Props {
  title: string
  navigationScreen: any
};

type NavProps = NativeStackNavigationProp<RootStackParamList>;

export const HomeNavButton = (props: Props) => {
  const navigation = useNavigation<NavProps>()

  const handleOnPress = () => {

    navigation.navigate(props.navigationScreen)
  }

  return (
    <View style={{paddingVertical: 2}}>
      <ButtonBase title={props.title} onPress={handleOnPress} buttonStyle={{backgroundColor: 'red', marginHorizontal: 5}}/>
    </View>
  );
};
