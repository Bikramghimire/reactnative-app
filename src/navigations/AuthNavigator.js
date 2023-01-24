import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Login = () => {
  return (
    <View>
      <Text>this is the login page</Text>
    </View>
  );
};
const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
      <AuthStack.Screen name="sign Up" component={Login}></AuthStack.Screen>
      <AuthStack.Screen name="Contact" component={Login}></AuthStack.Screen>
      <AuthStack.Screen name="Contact" component={Login}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
