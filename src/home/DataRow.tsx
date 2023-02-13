import * as React from 'react';
import { RowBase } from '../commonUi/RowBase'

interface Props {
  title: string
}
export const DataRow = (props: Props) => {
  return (
    <RowBase title={props.title} onPress={() => null} style={{backgroundColor: '#eac736'}}/>
  )
}
