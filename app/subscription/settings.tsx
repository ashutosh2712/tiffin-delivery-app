import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  const [mealType, setMealType] = useState("Lunch");

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
          Edit Subscription
        </Text>
      </View>
      {/* Current Subscription Card */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="px-5">
          <Text className="text-sm text-gray-500 mb-2">Current Plan</Text>

          <View className="bg-[#42CA82] rounded-2xl p-5">
            <Text className="text-white text-lg font-semibold">
              Home Veg Thali
            </Text>

            <Text className="text-white/80 mt-1">Lunch • ₹3000/month</Text>
          </View>
        </View>
        {/* Meal Preference Toggle */}
        <View className="px-5 mt-8">
          <Text className="text-sm text-gray-500 mb-3">Meal Preference</Text>

          <View className="bg-gray-100 rounded-xl flex-row p-1">
            <TouchableOpacity
              onPress={() => setMealType("Lunch")}
              className={`flex-1 py-3 rounded-lg items-center ${
                mealType === "Lunch" ? "bg-white" : ""
              }`}
            >
              <Text>Lunch</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setMealType("Dinner")}
              className={`flex-1 py-3 rounded-lg items-center ${
                mealType === "Dinner" ? "bg-white" : ""
              }`}
            >
              <Text>Dinner</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Delivery Address */}
        <View className="px-5 mt-8">
          <Text className="text-sm text-gray-500 mb-2">Delivery Address</Text>

          <TouchableOpacity
            className="border border-gray-200 rounded-xl p-4"
            onPress={() => router.push("/profile/addresses")}
          >
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="font-medium text-gray-900">Home</Text>

                <Text className="text-gray-500 mt-1">
                  Koramangala, Bangalore
                </Text>
              </View>

              <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
            </View>
          </TouchableOpacity>
        </View>
        {/* Subscription Actions */}
        <View className="px-5 mt-8">
          <Text className="text-sm text-gray-500 mb-3">
            Subscription Actions
          </Text>

          <TouchableOpacity className="bg-[#f6f7c2] rounded-xl p-4 mb-3">
            <Text className="text-[#111827] font-medium">
              Pause Subscription
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-red-50 rounded-xl p-4">
            <Text className="text-red-500 font-medium">
              Cancel Subscription
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* Sticky Save Button */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4">
        <TouchableOpacity className="bg-[#42CA82] py-4 rounded-xl">
          <Text className="text-white text-center font-semibold">
            Save Changes
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
