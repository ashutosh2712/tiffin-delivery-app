import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DateTimePickerModal from "react-native-modal-datetime-picker";
const ConfirmSubscription = () => {
  const router = useRouter();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date: Date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const formattedDate = selectedDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

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

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Content goes here */}

        {/* Plan Summary */}
        <View className="px-5 mt-6 ">
          <Text className="text-lg font-medium text-gray-900 mb-3 text-center">
            Selected Plan
          </Text>

          <View
            style={{
              backgroundColor: "#FFFFFF", // IMPORTANT
              borderRadius: 16,

              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 12,
              shadowOffset: { width: 0, height: 6 },

              elevation: 6, // Increase for Android
              padding: 8,
            }}
          >
            <Text className="text-[#F44336] mb-2 mr-1 text-right text-[10px]">
              Change Plan
            </Text>
            <View className="flex-row justify-between ml-2 mr-2">
              <Text className="text-lg font-medium text-gray-900 text-[18px]">
                Home Veg Thali
              </Text>
              <Text className="text-gray-900 font-medium text-[18px]">
                ₹120 /meal
              </Text>
            </View>

            <Text className="text-[#6B7280] mt-1 text-center">
              ₹3,000 per month (25 working days)
            </Text>

            <View className="h-[1px] bg-gray-100 my-3" />

            <View className="flex-row mb-2 justify-start ml-12">
              <Text className="text-[#6B7280] text-[14px]">Kitchen: </Text>
              <Text className="text-[#111827] text-[14px]">
                Annapurna Home Kitchen
              </Text>
            </View>

            <View className="flex-row mb-2 justify-start ml-12">
              <Text className="text-[#6B7280] text-[14px]">Meal Type: </Text>
              <Text className="text-[#111827] text-[14px]">Lunch</Text>
            </View>

            <View className="h-[1px] bg-gray-100 my-3" />

            <View className="flex-row mb-2 justify-start ml-12">
              <Text className="text-[#6B7280] text-[14px]">Delivery: </Text>
              <Text className="text-[#111827] text-[14px]">Included</Text>
            </View>

            <View className="flex-row mb-2 justify-start ml-12">
              <Text className="text-[#6B7280] text-[14px]">Timing: </Text>
              <Text className="text-[#111827] text-[14px]">
                12:00 PM – 1:30 PM
              </Text>
            </View>

            <Text className="text-[#808080] mb-1 text-center text-[10px]">
              Prepared fresh daily. Delivered via verified partner.
            </Text>
          </View>
        </View>

        {/* Date Picker */}
        <View className="px-5 mt-6 flex-row items-center gap-4 ml-2">
          <Text className="text-lg font-medium text-gray-900 mb-3 mt-1">
            Start Date
          </Text>

          <TouchableOpacity
            onPress={showDatePicker}
            className="bg-white border border-gray-200 rounded-xl p-4 flex-row justify-between items-center w-[250px]"
          >
            <Text className="text-gray-900">{formattedDate}</Text>

            <Image source={require("../../assets/images/date_range.png")} />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            minimumDate={new Date()}
          />
        </View>

        <Text className="text-[#808080] mb-1 mt-2 text-center text-[10px]">
          You can pause or change this later.
        </Text>

        {/* Delivery Address */}
        <View className="px-5 mt-6">
          <Text className="text-lg font-medium text-gray-900 mb-3 text-center">
            Delivery Address
          </Text>

          <View
            style={{
              backgroundColor: "#FFFFFF", // IMPORTANT
              borderRadius: 16,

              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 12,
              shadowOffset: { width: 0, height: 6 },

              elevation: 6, // Increase for Android
              padding: 12,
            }}
          >
            <View className="border border-[#42CA82] rounded-full p-1 w-24 bg-[#F3F4F6]">
              <Text className="font-medium text-[#42CA82] text-center">
                Home
              </Text>
            </View>

            <Text className="text-[#111827] mt-2 ml-2">
              Flat 302, Green Residency 6th Cross, 18th Main Whitefield,
              Bangalore – 560095
            </Text>

            <Text className="text-[#6B7280] mt-2 ml-2">
              Ashutosh Roy • 9876543210
            </Text>

            <View className="h-[1px] bg-[#F44336] my-3" />
            <View className="flex-row justify-end items-center gap-1 mr-2">
              <Text className="text-[#F44336] mb-2 mr-1 text-[12px]">Edit</Text>
              <Image source={require("../../assets/images/edit.png")} />
            </View>
          </View>
        </View>

        {/* Price Details */}
        <View className="px-5 mt-6">
          <Text className="text-lg font-medium text-[#111827] mb-3 text-center">
            Price Breakdown
          </Text>

          <View
            style={{
              backgroundColor: "#FFFFFF", // IMPORTANT
              borderRadius: 16,

              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 12,
              shadowOffset: { width: 0, height: 6 },

              elevation: 6, // Increase for Android
              padding: 12,
            }}
          >
            <View className="flex-row justify-between mb-2">
              <Text className="text-[#374151]">Monthly Plan (25 meals)</Text>
              <Text className="text-[#111827]">₹3000</Text>
            </View>

            <View className="flex-row justify-between mb-2">
              <Text className="text-[#374151]">Delivery</Text>
              <Text className="text-[#111827]">₹0</Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-[#374151]">Taxes</Text>
              <Text>₹0</Text>
            </View>

            <View className="h-[1px] bg-gray-100 my-3" />

            <View className="flex-row justify-between">
              <Text className="font-medium text-gray-900">Total</Text>
              <Text className="font-medium text-gray-900">₹3000</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Sticky Button */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4 mb-4">
        <TouchableOpacity
          onPress={() => router.push("/payment")}
          className="bg-[#42CA82] py-4 rounded-xl"
        >
          <Text className="text-white text-center font-semibold text-[16px]">
            Proceed to Payment • ₹3000
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmSubscription;
