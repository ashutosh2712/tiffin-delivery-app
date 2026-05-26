import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderCard from "../components/OrderCard";

const orders = [
  {
    day: "Monday Lunch",
    date: "12 May 2026",
    menu: "Rajma • Rice • Salad",
    status: "Delivered",
  },
  {
    day: "Sunday Lunch",
    date: "11 May 2026",
    menu: "Paneer • Dal • Rice",
    status: "Delivered",
  },
];

const filters = [
  { label: "All", count: 24 },
  { label: "Upcoming", count: 5 },
  { label: "Delivered", count: 17 },
  { label: "Skipped", count: 2 },
];

// const steps = ["Preparing", "On The Way", "Delivered"];

// const currentStep = "Preparing";

const OrdersScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-5 pt-14 pb-6">
        <Text className="text-2xl font-semibold text-gray-900">Orders</Text>

        <Text className="text-gray-500 mt-2">
          Track your upcoming and past deliveries
        </Text>
      </View>
      {/* Filter Row */}
      <View className="px-5 mb-6">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 8,
          }}
        >
          {filters.map((filter) => {
            const isSelected = selectedFilter === filter.label;

            return (
              <TouchableOpacity
                key={filter.label}
                onPress={() => setSelectedFilter(filter.label)}
                className={`mr-3 px-4 py-3 rounded-full flex-row items-center ${
                  isSelected ? "bg-[#42CA82]" : "bg-gray-100"
                }`}
              >
                <Text
                  className={`font-medium ${
                    isSelected ? "text-white" : "text-gray-700"
                  }`}
                >
                  {filter.label}
                </Text>

                <View
                  className={`ml-2 px-2 py-[2px] rounded-full ${
                    isSelected ? "bg-white/20" : "bg-white"
                  }`}
                >
                  <Text
                    className={`text-xs font-medium ${
                      isSelected ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {filter.count}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {/* Upcoming Delivery Card */}
      <View className="px-5">
        <Text className="text-sm text-gray-500 mb-2">Upcoming Delivery</Text>

        <View className="bg-[#42CA82] rounded-3xl p-5">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-white text-lg font-semibold">
                Today's Lunch
              </Text>

              <Text className="text-white/80 mt-1">
                Arriving between 12:00 PM - 1:00 PM
              </Text>
            </View>

            <View className="bg-white/20 px-3 py-1 rounded-full flex-row items-center">
              <Text className="text-white text-xs">ON THE WAY</Text>
            </View>
          </View>

          <View className="h-[1px] bg-white/20 my-5" />

          <Text className="text-white">Paneer Butter Masala • Dal • Rice</Text>
        </View>
      </View>
      {/* <View className="flex-row justify-between mt-4">
        {steps.map((step) => {
          const isActive = step === currentStep;

          return (
            <View key={step} className="items-center flex-1">
              <View
                className={`w-3 h-3 rounded-full ${
                  isActive ? "bg-green-400" : "bg-white/40"
                }`}
              />

              <Text
                className={`text-xs mt-2 ${
                  isActive ? "text-white" : "text-white/70"
                }`}
              >
                {step}
              </Text>
            </View>
          );
        })}
      </View> */}
      {/* Quick Status Row */}
      <View className="px-5 mt-6">
        <View className="flex-row justify-between">
          <View className="items-center flex-1">
            <Text className="text-lg font-semibold text-gray-900">12</Text>
            <Text className="text-gray-500 text-xs">Delivered</Text>
          </View>

          <View className="items-center flex-1">
            <Text className="text-lg font-semibold text-gray-900">2</Text>
            <Text className="text-gray-500 text-xs">Paused</Text>
          </View>

          <View className="items-center flex-1">
            <Text className="text-lg font-semibold text-gray-900">16</Text>
            <Text className="text-gray-500 text-xs">Remaining</Text>
          </View>
        </View>
      </View>
      {/* Recent Orders Title */}
      <View className="px-5 mt-8">
        <Text className="text-lg font-medium text-gray-900">
          Recent Deliveries
        </Text>
        {orders.map((order, index) => (
          <OrderCard key={index} order={order} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default OrdersScreen;
