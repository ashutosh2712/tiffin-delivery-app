import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ChefCard = ({ chef }: any) => {
  const router = useRouter();
  return (
    <View className="flex-row bg-white rounded-2xl p-4 mb-5 border border-gray-100">
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
            {chef.cuisine} • {chef.rating} ★ • {chef.distance}
          </Text>

          <Text className="text-[15px] font-medium text-gray-900 mt-2">
            Starts from ₹{chef.price}
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          onPress={() => router.push(`/chef/${chef.id}`)}
          className="bg-[#42CA82] py-4 rounded-[10px] w-[112px] h-fit mt-2"
        >
          <Text className="text-white text-center font-semibold text-[14px]">
            View Plans
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChefCard;
