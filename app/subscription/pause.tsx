import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DateTimePickerModal from "react-native-modal-datetime-picker";

const PauseSubscription = () => {
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
        {/* Content */}
        {/* Header */}
        <View className="flex-row items-center px-5 pt-14 pb-6">
          <Text className="text-xl font-semibold text-gray-900 ml-3">
            Pause Subscription
          </Text>
        </View>
        {/* Info Card */}
        <View className="px-5">
          <View className="bg-[#F9FAFB] rounded-2xl p-4">
            <Text className="font-medium text-gray-900">
              Your meals will be paused temporarily
            </Text>

            <Text className="text-gray-500 mt-2 leading-6">
              Deliveries will automatically resume after the selected pause
              period.
            </Text>
          </View>
        </View>
        {/* Pause Duration Options */}
        <View className="px-5 mt-8">
          <Text className="text-sm text-gray-500 mb-3">Pause Duration</Text>
          <View className="flex-row">
            {/* Start Date */}
            <View className="flex-1 border border-gray-200 rounded-xl p-4 mr-2">
              <Text className="text-gray-500 text-xs">From</Text>

              <TouchableOpacity
                onPress={showDatePicker}
                className="p-2 flex-row justify-between items-center gap-4"
              >
                <Text className="text-gray-900">{formattedDate}</Text>

                <Image source={require("../../assets/images/date_range.png")} />
              </TouchableOpacity>
            </View>

            {/* End Date */}
            <View className="flex-1 border border-gray-200 rounded-xl p-4 ml-2">
              <Text className="text-gray-500 text-xs">To</Text>

              <TouchableOpacity
                onPress={showDatePicker}
                className="p-2 flex-row justify-between items-center gap-4"
              >
                <Text className="text-gray-900">{formattedDate}</Text>

                <Image source={require("../../assets/images/date_range.png")} />
              </TouchableOpacity>
            </View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              minimumDate={new Date()}
            />
          </View>
        </View>
        {/* Optional Reason Selection */}
        <View className="px-5 mt-8">
          <Text className="text-sm text-gray-500 mb-3">Reason (Optional)</Text>

          <View className="flex-row flex-wrap">
            {["Travelling", "Diet Break", "Other"].map((reason) => (
              <TouchableOpacity
                key={reason}
                className="bg-gray-100 px-4 py-2 rounded-full mr-3 mb-3"
              >
                <Text className="text-gray-700">{reason}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Resume Info Note */}
        <View className="px-5 mt-8">
          <View className="flex-row items-start">
            <Ionicons
              name="information-circle-outline"
              size={18}
              color="#6B7280"
            />

            <Text className="text-gray-500 text-sm ml-2 flex-1 leading-5">
              Your subscription will automatically resume after the pause period
              ends.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Sticky Button */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4 mb-2">
        <TouchableOpacity className="bg-[#42CA82] py-4 rounded-xl">
          <Text className="text-white text-center font-semibold text-[16px]">
            Confirm Pause
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PauseSubscription;
