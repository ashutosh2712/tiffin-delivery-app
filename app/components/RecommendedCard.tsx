import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const RecommendedCard = ({ chef }: any) => {
  return (
    <TouchableOpacity className="flex-row bg-white rounded-2xl p-4 mb-5 border border-gray-100 mr-4">
      {/* Image */}
      <Image
        source={chef.image}
        className="w-[132px] h-[100px] rounded-[12px] mr-4"
        resizeMode="contain"
      />

      {/* Content */}
      <View className="flex-1 justify-between ml-2">
        <View>
          <Text className="text-lg font-medium text-[#111827]">
            {chef.name}
          </Text>

          <Text className="text-sm text-gray-500 mt-1">
            {chef.cuisine} • {chef.rating} ★
          </Text>

          <Text className="text-[15px] font-medium text-gray-900 mt-2">
            ₹{chef.price}/meal
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecommendedCard;
