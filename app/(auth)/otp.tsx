import { router } from "expo-router";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const otp = () => {
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
          Verify OTP
        </Text>

        <Text className="text-[#6B7280] mb-8 text-[14px] font-semibold text-center">
          Enter the 6-digit code sent to +91 XXXXXXXX
        </Text>

        {/* OTP Input */}
        <TextInput
          placeholder="- - - - - -"
          className=" px-4 py-4 mb-6 text-center text-xl tracking-widest"
          keyboardType="number-pad"
        />

        <TouchableOpacity
          className="bg-[#42CA82] py-4 rounded-xl w-full"
          onPress={() => router.push("/(auth)/otp")}
        >
          <Text className="text-white text-center font-semibold">
            Verify & Continue
          </Text>
        </TouchableOpacity>

        <Text className="text-center text-[#111827] mt-8 text-[12px]">
          Didn't receive the code?{" "}
          <Text className="text-[#42CA82] font-semibold">Resend OTP</Text>
        </Text>
      </View>
    </View>
  );
};

export default otp;
