import * as React from 'react';
import { ButtonBase } from "../commonUi/ButtonBase";

interface Props {
  title: string
  onPress: () => void
}

export const TodoButton = (props: Props) => {
  return (
    <ButtonBase title={props.title} onPress={props.onPress} buttonStyle={{height: 40}}/>
  )
}
