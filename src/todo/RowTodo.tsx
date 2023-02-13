import * as React from 'react';
import { RowBase } from '../commonUi/RowBase'

interface Props {
  title: string
  onPress: () => void
}
export const RowTodo = (props: Props) => {
  return (
    <RowBase title={props.title} onPress={props.onPress}/>
  )
}
