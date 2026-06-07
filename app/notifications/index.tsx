import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationCard from "../components/NotificationCard";

const notifications = [
  {
    id: 1,
    title: "Your lunch is on the way",
    description: "Expected delivery between 12:00 PM - 1:00 PM",
    time: "10 mins ago",
    type: "delivery",
  },
  {
    id: 2,
    title: "Payment successful",
    description: "₹3000 payment received successfully",
    time: "Yesterday",
    type: "payment",
  },
  {
    id: 3,
    title: "Subscription paused",
    description: "Your meals are paused till 20 May",
    time: "Yesterday",
    type: "pause",
  },
];

const NotificationScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Back Button */}
      <View className="absolute top-12 left-5 z-10">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center space-x-2 gap-2 mt-2"
        >
          <Image
            source={require("../../assets/images/back.png")}
            className="w-6 h-6"
          />
          <Text className="text-lg">Back</Text>
        </TouchableOpacity>
      </View>
      {/* Header */}
      <View className="flex-row items-center px-5 pt-14 pb-6">
        <Text className="text-xl font-semibold text-gray-900 ml-3">
          Notifications
        </Text>
      </View>
      <View className="px-5">
        {notifications.map((item) => (
          <NotificationCard key={item.id} item={item} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
