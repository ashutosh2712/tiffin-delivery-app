import { router } from "expo-router";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const login = () => {
  return (
    <View className="flex-1 bg-white px-5">
      {/*  Logo Section */}
      <View className="items-center mt-16 mb-12">
        <Image
          source={require("../../assets/images/company_icon.png")}
          style={{ width: 115, height: 115, resizeMode: "contain" }}
        />
      </View>

      {/*  Content Section */}
      <View className="flex-1">
        <Text className="text-2xl font-semibold text-[#111827] mb-2 text-center">
          Welcome
        </Text>

        <Text className="text-[#6B7280] mb-8 text-[16px] font-semibold text-center">
          Enter your phone number to continue
        </Text>

        <View className="flex-row items-center border border-gray-300 rounded-[16px] px-4 py-4 mb-6">
          {/* country Flag */}
          <Image
            source={require("../../assets/images/flag_Icon.png")}
            style={{ width: 24, height: 16, marginRight: 8 }}
          />

          {/* Country Code */}
          <TextInput
            value="+91"
            editable={false}
            className="mr-2 text-gray-900 font-semibold"
          />

          {/* Phone Input */}
          <TextInput
            placeholder="9876543210"
            placeholderTextColor="#bababb"
            className="flex-1 text-[16px] font-semibold text-gray-900"
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity
          className="bg-[#42CA82] py-4 rounded-xl w-full"
          onPress={() => router.push("/(auth)/otp")}
        >
          <Text className="text-white text-center font-semibold">Continue</Text>
        </TouchableOpacity>

        <Text className="text-center text-[#111827] mt-8 text-[12px]">
          By continuing, you agree to our Terms & Privacy Policy
        </Text>
      </View>
    </View>
  );
};

export default login;
