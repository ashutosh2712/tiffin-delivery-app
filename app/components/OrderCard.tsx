import { Text, View } from "react-native";

const OrderCard = () => {
  return (
    <View className="mx-5 mt-4 border border-gray-100 rounded-2xl p-4">
      <View className="flex-row justify-between">
        <View>
          <Text className="font-medium text-gray-900">Monday Lunch</Text>

          <Text className="text-gray-500 mt-1">12 May 2026</Text>
        </View>

        <View className="bg-green-100 px-3 py-1 rounded-full flex-row items-center">
          <Text className="text-green-700 text-xs">Delivered</Text>
        </View>
      </View>

      <View className="h-[1px] bg-gray-100 my-3" />

      <Text className="text-gray-600">Rajma • Rice • Salad</Text>
    </View>
  );
};

export default OrderCard;
