import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PaymentScreen = () => {
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
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Content */}
        {/* Header */}
        <Text className="text-xl font-medium text-[#111827] ml-4 text-center px-5 pt-14 pb-6">
          Payment
        </Text>

        {/* Plan Summary */}
        <View className="px-5">
          <Text className="text-sm text-gray-500 mb-2">Order Summary</Text>

          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 16,

              shadowColor: "#000",
              shadowOpacity: 0.06,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 4 },

              elevation: 4,
            }}
          >
            <View className="p-4">
              <Text className="text-lg font-medium text-gray-900">
                Home Veg Thali
              </Text>

              <Text className="text-gray-500 mt-1">Lunch • Monthly Plan</Text>
              <Text className="text-gray-500 mt-1">Annapurna Home Kitchen</Text>

              <View className="h-[1px] bg-gray-100 my-4" />

              <View className="flex-row justify-between">
                <Text className="text-gray-600">Total Amount</Text>

                <Text className="font-semibold text-gray-900">₹3000</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Payment Methods */}
        <View className="px-5 mt-8">
          <Text className="text-sm text-gray-500 mb-3">
            Choose Payment Method
          </Text>

          {/* UPI */}
          <TouchableOpacity className="border border-gray-200 rounded-xl p-4 flex-row items-center justify-between mb-4">
            <View className="flex-col">
              <View className="flex-row items-center justify-start">
                <Image
                  source={require("../../assets/images/upi.png")}
                  className="mr-3"
                />
                <Text className="font-medium text-gray-900 text-lg">UPI</Text>
              </View>
              <Text className="text-gray-500 text-sm mt-1 ml-4">
                Google Pay, PhonePe, Paytm
              </Text>
            </View>
            <View className="w-5 h-5 border-2 border-[#42CA82] rounded-full items-center justify-center">
              <View className="w-2.5 h-2.5 bg-[#42CA82] rounded-full" />
            </View>
          </TouchableOpacity>

          {/* Card */}
          <TouchableOpacity className="border border-gray-200 rounded-xl p-4 flex-row items-center justify-between mb-4">
            <View className="flex-col">
              <View className="flex-row items-center justify-start">
                <Image
                  source={require("../../assets/images/credit-card.png")}
                  className="mr-3"
                />
                <Text className="font-medium text-gray-900 text-lg">
                  Credit / Debit Card
                </Text>
              </View>
              <Text className="text-gray-500 text-sm mt-1 ml-4">
                Visa, Mastercard, RuPay
              </Text>
            </View>

            <View className="w-5 h-5 border border-gray-300 rounded-full" />
          </TouchableOpacity>

          {/* COD */}
          <TouchableOpacity className="border border-gray-200 rounded-xl p-4 flex-row items-center justify-between">
            <View className="flex-col">
              <View className="flex-row items-center justify-start">
                <Image
                  source={require("../../assets/images/cash-on-delivery.png")}
                  className="mr-3"
                />
                <Text className="font-medium text-gray-900 text-lg">
                  Cash on Delivery
                </Text>
              </View>
              <Text className="text-gray-500 text-sm mt-1 ml-4">
                Pay when meal is delivered
              </Text>
            </View>

            <View className="w-5 h-5 border border-gray-300 rounded-full" />
          </TouchableOpacity>
        </View>
        <View className="px-5 mt-8 flex-row items-center">
          <Ionicons name="lock-closed-outline" size={16} color="#6B7280" />

          <Text className="text-gray-500 text-sm ml-2">
            Your payment is securely processed
          </Text>
        </View>
      </ScrollView>

      {/* Sticky Button */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4">
        <TouchableOpacity
          className="bg-[#42CA82] py-4 rounded-xl"
          onPress={() => router.push("/payment/success")}
        >
          <Text className="text-white text-center font-semibold text-[16px]">
            Pay ₹3000
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;
