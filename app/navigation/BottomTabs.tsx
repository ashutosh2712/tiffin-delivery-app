import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrdersScreen from "../(tabs)/OrdersScreen";
import ProfileScreen from "../(tabs)/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
