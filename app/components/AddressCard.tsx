import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const AddressCard = ({ label, address, nameContact, isDefault }: any) => {
  return (
    <View className="bg-white border border-gray-100 rounded-2xl p-10 mb-4">
      <View className="flex-row justify-between">
        <View className="flex-row items-center">
          <Ionicons name="location" size={18} color="#42CA82" />

          <Text className="font-medium text-gray-900 ml-2">{label}</Text>
        </View>

        {isDefault && (
          <View className="bg-green-100 px-3 py-1 rounded-full">
            <Text className="text-green-700 text-xs">Default</Text>
          </View>
        )}
      </View>

      <Text className="text-gray-500 mt-3 leading-6 text-[16px]">
        {address}
      </Text>
      <Text className="text-[#6B7280] text-[12px] mt-2">{nameContact}</Text>
      <View className="flex-row mt-4">
        <TouchableOpacity
          className="flex-row items-center mr-6"
          onPress={() =>
            router.push({
              pathname: "/profile/address-form",
              params: {
                id: String(address.id),
              },
            })
          }
        >
          <Ionicons name="create-outline" size={18} color="#42CA82" />

          <Text className="text-[#42CA82] font-medium ml-1">Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center">
          <Ionicons name="trash-outline" size={18} color="#EF4444" />

          <Text className="text-red-500 font-medium ml-1">Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddressCard;
