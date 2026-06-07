import { Redirect } from "expo-router";

const index = () => {
  const isLoggedIn = false; // Replace with actual authentication logic

  if (!isLoggedIn) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Redirect href="/(tabs)" />;
};

export default index;
