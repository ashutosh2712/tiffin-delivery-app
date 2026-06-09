import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const NotificationCard = ({ item }: any) => {
  const iconMap: any = {
    delivery: "bicycle-outline",
    payment: "card-outline",
    pause: "pause-circle-outline",
  };

  return (
    <View className="bg-white border border-gray-100 rounded-2xl p-4 mb-4">
      <View className="flex-row">
        {/* Icon */}
        <View className="w-10 h-10 rounded-full bg-[#F3F4F6] items-center justify-center">
          <Ionicons name={iconMap[item.type]} size={20} color="#42CA82" />
        </View>

        {/* Content */}
        <View className="flex-1 ml-3">
          <View className="flex-row justify-between">
            <Text className="font-medium text-gray-900 flex-1">
              {item.title}
            </Text>

            <Text className="text-xs text-gray-400 ml-3">{item.time}</Text>
          </View>

          <Text className="text-gray-500 mt-1 leading-5">
            {item.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;
