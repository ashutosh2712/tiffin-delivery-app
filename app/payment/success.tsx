import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PaymentSuccess = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white px-5 items-center">
      {/* Content */}
      {/* Header */}
      <View className="w-24 h-24 rounded-full bg-[#E8F8F0] items-center justify-center mt-20">
        <Ionicons name="checkmark" size={48} color="#42CA82" />
      </View>

      <Text className="text-2xl font-bold text-[#111827] mt-8">
        Subscription Confirmed!
      </Text>

      <Text className="text-[#6B7280] text-center mt-3 leading-6">
        Your meal plan has been successfully activated.
      </Text>

      <View
        className="w-full mt-10 rounded-2xl p-5"
        style={{
          backgroundColor: "#FFFFFF",

          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 4 },

          elevation: 4,
        }}
      >
        <Text className="text-sm text-gray-500 ">Subscription Details</Text>
        <Text className="text-lg font-medium text-gray-900 mt-2 ">
          Monthly Home Veg Thali
        </Text>

        <Text className="text-gray-500 mt-1 ">Lunch • Monthly Plan</Text>
        <View className="h-[1px] bg-gray-100 my-3" />

        <View className="flex-row justify-between mb-2">
          <Text className="text-[#374151]">Amount Paid</Text>

          <Text className="font-semibold text-[#111827]">₹3300</Text>
        </View>
        <View className="flex-row justify-between mb-2">
          <Text className="text-[#374151]">Payment Method</Text>

          <Text className="font-semibold text-[#111827]">UPI</Text>
        </View>
        <View className="flex-row justify-between mb-2">
          <Text className="text-[#374151]">Transaction ID</Text>

          <Text className="font-semibold text-[#111827]">TXN4829382</Text>
        </View>
      </View>
      <Text className="text-xl font-bold text-[#111827] mt-8">
        What happens next?
      </Text>
      <Text className="text-[#6B7280] text-center mt-3 leading-6 text-sm">
        • Your chef will begin preparing meals from the selected date.
      </Text>
      <Text className="text-[#6B7280] text-center mt-2 leading-6 text-sm">
        • You can pause or manage your subscription anytime.
      </Text>
      <Text className="text-[#6B7280] text-center mt-2 leading-6 text-sm">
        • Order status will be visible in the Orders tab.
      </Text>
      <TouchableOpacity
        onPress={() => router.push("/(tabs)/subscriptions")}
        className="bg-[#42CA82] py-4 rounded-xl w-full mt-10"
      >
        <Text className="text-white text-center font-semibold text-[16px]">
          Go to My Subscription
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PaymentSuccess;
