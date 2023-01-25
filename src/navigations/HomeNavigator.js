import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import {
  CONTACT_CREATE,
  CONTACT_DETAIL,
  CONTACT_LIST,
  SETTINGS,
} from "../constants/rootNames";
import Contacts from "../screens/contact";

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Contact">
      <HomeStack.Screen
        name={CONTACT_LIST}
        component={Contacts}
      ></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTACT_DETAIL}
        component={Contacts}
      ></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTACT_CREATE}
        component={Contacts}
      ></HomeStack.Screen>
      <HomeStack.Screen name={SETTINGS} component={Contacts}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
