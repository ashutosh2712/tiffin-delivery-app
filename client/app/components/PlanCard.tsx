import { Text, TouchableOpacity, View } from "react-native";

const PlanCard = ({ plan }: any) => {
  return (
    <View className="bg-white border border-gray-100 rounded-2xl p-4 mb-5">
      {/* Top */}
      <View className="flex-row justify-between">
        <Text className="text-lg font-medium text-gray-900">{plan.name}</Text>
        <Text className="text-gray-900 font-medium">₹{plan.price}/meal</Text>
      </View>

      <Text className="text-gray-500 mt-1">₹{plan.monthly} per month</Text>

      {/* Divider */}
      <View className="h-[1px] bg-gray-100 my-4" />

      {/* Items */}
      {plan.items.map((item: string, index: number) => (
        <Text key={index} className="text-gray-700 text-sm mb-1">
          • {item}
        </Text>
      ))}

      {/* Divider */}
      <View className="h-[1px] bg-gray-100 my-4" />

      <Text className="text-gray-500 text-sm">Delivery Included</Text>

      {/* Button */}
      <TouchableOpacity className="mt-4 bg-[#42CA82] py-3 rounded-xl">
        <Text className="text-white text-center font-medium">Select Plan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlanCard;
