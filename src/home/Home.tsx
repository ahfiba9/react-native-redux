import * as React from "react";
import { Text, View } from "react-native";
import { HomeNavButton } from "./HomeNavButton";
import { DataRow } from "./DataRow";
import { useSelector } from "react-redux";
import { GlobalState } from "src/redux/store";

export const Home = () => {
  const counter = useSelector((state: GlobalState) => state.counterStates.counter);
  const todoList = useSelector((state: GlobalState) => state.todoStates.todo);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Data</Text>
      <DataRow title={`Current counter = ${counter}`}/>
      <DataRow title={`Current number of todo list = ${todoList.length}`}/>

      <View style={{ flex: 0.5, alignItems: "center", justifyContent: "center" }}>
        <Text>Navigation</Text>
        <View style={{ flexDirection: "row" }}>
          <HomeNavButton title={"Counter"} navigationScreen={"Counter"} />
          <HomeNavButton title={"Todo"} navigationScreen={"Todo"} />
          <HomeNavButton title={"Account"} navigationScreen={"Account"} />
        </View>
      </View>

    </View>
  );
};
