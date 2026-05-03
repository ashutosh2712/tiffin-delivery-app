import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanCard from "../components/PlanCard";

const lunchPlans = [
  {
    name: "Home Veg Thali",
    price: 120,
    monthly: 3000,
    items: ["3 Rotis", "Sabzi", "Dal", "Rice"],
  },
  {
    name: "Premium Veg",
    price: 150,
    monthly: 3750,
    items: ["Paneer", "Dal", "Rice"],
  },
];

const dinnerPlans = [
  {
    name: "Light Dinner",
    price: 110,
    monthly: 2750,
    items: ["2 Rotis", "Sabzi", "Dal"],
  },
  {
    name: "Protein Dinner",
    price: 160,
    monthly: 4000,
    items: ["Chicken", "Rice", "Salad"],
  },
];

const ChefDetail = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [mealType, setMealType] = useState<"lunch" | "dinner">("lunch");

  const plans = mealType === "lunch" ? lunchPlans : dinnerPlans;

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* 🔙 Back Button */}
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

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Image */}
        <Image
          source={require("../../assets/images/chef-img.jpg")}
          className="w-56 h-56 mt-8  self-center rounded-b-[16px] "
        />
        <View className="px-5 mt-4">
          <Text className="text-2xl font-regular text-center">
            Annapurna Home Kitchen
          </Text>

          <Text className="text-[#808080] mt-1 text-center">
            North Indian • 4.8 ★ (214 reviews) • 1.2 km
          </Text>

          <Text className="text-gray-500 mt-3 text-[12px] text-center">
            Fresh home-style meals prepared daily with balanced spices.
          </Text>
        </View>

        {/* Meal Type Toggle */}
        <View className="px-5 mt-6 w-[200px] self-center">
          <View className="bg-gray-100 rounded-full flex-row p-3">
            {/* Lunch */}
            <TouchableOpacity
              onPress={() => setMealType("lunch")}
              className={`flex-1 py-3 rounded-full items-center ${
                mealType === "lunch" ? "bg-[#42CA82]" : ""
              }`}
            >
              <Text
                className={`font-medium ${
                  mealType === "lunch" ? "text-[#ffffff]" : "text-gray-500"
                }`}
              >
                Lunch
              </Text>
            </TouchableOpacity>

            {/* Dinner */}
            <TouchableOpacity
              onPress={() => setMealType("dinner")}
              className={`flex-1 py-3 rounded-full items-center ${
                mealType === "dinner" ? "bg-[#42CA82]" : ""
              }`}
            >
              <Text
                className={`font-medium ${
                  mealType === "dinner" ? "text-[#ffffff]" : "text-gray-500"
                }`}
              >
                Dinner
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Plans */}
        <View className="px-5 mt-6">
          {plans.map((plan, index) => (
            <PlanCard key={mealType + index} plan={plan} />
          ))}
        </View>
      </ScrollView>

      {/* Subscribe Button */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-3 mb-4">
        <TouchableOpacity className="bg-[#42CA82] py-4 rounded-xl">
          <Text className="text-white text-center font-semibold">
            Subscribe • ₹3000
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChefDetail;
