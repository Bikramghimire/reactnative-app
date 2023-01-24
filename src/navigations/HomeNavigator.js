import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
const Contacts = () => {
  return (
    <View>
      <Text>this is contact</Text>
    </View>
  );
};
const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Contact">
      <HomeStack.Screen name="Contact" component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen
        name="Contact Details"
        component={Contacts}
      ></HomeStack.Screen>
      {/* <HomeStack.Screen name="Contact" component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen name="Contact" component={Contacts}></HomeStack.Screen> */}
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
