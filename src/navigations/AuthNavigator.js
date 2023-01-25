import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { LOGIN, REGISTER } from "../constants/rootNames";
import Login from "../screens/login";

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={REGISTER} component={Login}></AuthStack.Screen>
      {/* <AuthStack.Screen name={} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={} component={Login}></AuthStack.Screen> */}
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
