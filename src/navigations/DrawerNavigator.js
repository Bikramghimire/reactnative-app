import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeNavigator from "./HomeNavigator";

const Login = () => {
  return (
    <View>
      <Text>this is the login page</Text>
    </View>
  );
};
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeNavigator}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
