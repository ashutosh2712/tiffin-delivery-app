import { Redirect } from "expo-router";
import React from "react";

const index = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Redirect href="/(tabs)" />;
};

export default index;
