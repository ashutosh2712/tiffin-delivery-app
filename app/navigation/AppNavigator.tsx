import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../(auth)/login";
import BottomTabs from "./BottomTabs";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const isLoggedIn = false; // replace later with Zustand/auth
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            {/* <Stack.Screen name="Otp" component={OtpScreen} /> */}
          </>
        ) : (
          <Stack.Screen name="Main" component={BottomTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
