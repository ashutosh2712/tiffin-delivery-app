import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsPreferences = () => {
  const [autoRenew, setAutoRenew] = useState(true);

  const [notifications, setNotifications] = useState(true);

  const [mealTiming, setMealTiming] = useState("Lunch");

  const [instructions, setInstructions] = useState("");
  const router = useRouter();
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
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* Header */}
        <View className="flex-row items-center px-5 pt-14 pb-6">
          <Text className="text-xl font-semibold text-gray-900 ml-3">
            Subscription Settings
          </Text>
        </View>
        {/* Auto-Renew Toggle */}
        <View className="px-5">
          <Text className="text-sm text-gray-500 mb-3">Preferences</Text>

          <View className="bg-white border border-gray-100 rounded-2xl px-4">
            {/* Auto Renew */}
            <View className="flex-row items-center justify-between py-4">
              <View>
                <Text className="font-medium text-gray-900">Auto Renew</Text>

                <Text className="text-gray-500 mt-1 text-sm">
                  Automatically renew subscription
                </Text>
              </View>

              <Switch
                value={autoRenew}
                onValueChange={setAutoRenew}
                trackColor={{
                  false: "#D1D5DB",
                  true: "#42CA82",
                }}
              />
            </View>

            <View className="h-[1px] bg-gray-100" />

            {/* Notifications */}
            <View className="flex-row items-center justify-between py-4">
              <View>
                <Text className="font-medium text-gray-900">
                  Delivery Notifications
                </Text>

                <Text className="text-gray-500 mt-1 text-sm">
                  Get updates about deliveries
                </Text>
              </View>

              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{
                  false: "#D1D5DB",
                  true: "#42CA82",
                }}
              />
            </View>
          </View>
        </View>
        {/* Meal Timing */}
        <View className="px-5 mt-8">
          <Text className="text-sm text-gray-500 mb-3">
            Default Meal Timing
          </Text>

          <View className="bg-gray-100 rounded-xl flex-row p-1">
            <TouchableOpacity
              onPress={() => setMealTiming("Lunch")}
              className={`flex-1 py-3 rounded-lg items-center ${
                mealTiming === "Lunch" ? "bg-white" : ""
              }`}
            >
              <Text>Lunch</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setMealTiming("Dinner")}
              className={`flex-1 py-3 rounded-lg items-center ${
                mealTiming === "Dinner" ? "bg-white" : ""
              }`}
            >
              <Text>Dinner</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Delivery Instructions */}
        <View className="px-5 mt-8">
          <Text className="text-sm text-gray-500 mb-2">
            Delivery Instructions
          </Text>

          <TextInput
            multiline
            numberOfLines={4}
            placeholder="Leave at security gate..."
            textAlignVertical="top"
            value={instructions}
            onChangeText={setInstructions}
            className="border border-gray-200 rounded-2xl p-4 min-h-[120px]"
          />
        </View>
        {/* Pause Rules Card */}
        <View className="px-5 mt-8">
          <Text className="text-sm text-gray-500 mb-2">Pause Rules</Text>

          <View className="bg-[#F9FAFB] rounded-2xl p-4">
            <Text className="text-gray-900 font-medium">
              Maximum pause duration: 7 days
            </Text>

            <Text className="text-gray-500 mt-2 leading-6">
              Longer pauses may require support approval.
            </Text>
          </View>
        </View>
      </ScrollView>
      {/* Save Button */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4">
        <TouchableOpacity className="bg-[#42CA82] py-4 rounded-xl">
          <Text className="text-white text-center font-semibold">
            Save Preferences
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SettingsPreferences;
