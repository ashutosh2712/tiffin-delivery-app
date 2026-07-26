import { TouchableOpacity, Text, View } from "react-native";

interface Order {
  id: string;
  day: string;
  date: string;
  menu: string;
  status: string;
}

interface OrderCardProps {
  order: Order;
  onPress?: () => void;
}

const OrderCard = ({ order, onPress }: OrderCardProps) => {
  const statusStyle = {
    Delivered: {
      container: "bg-green-100",
      text: "text-green-700",
    },
    Upcoming: {
      container: "bg-yellow-100",
      text: "text-yellow-700",
    },
    Cancelled: {
      container: "bg-red-100",
      text: "text-red-700",
    },
    "On The Way": {
      container: "bg-blue-100",
      text: "text-blue-700",
    },
  };

  const style =
    statusStyle[order.status as keyof typeof statusStyle] ??
    statusStyle.Upcoming;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="mx-5 mt-4 border border-gray-100 rounded-2xl p-4"
    >
      <View className="flex-row justify-between">
        <View>
          <Text className="font-medium text-gray-900">{order.day}</Text>

          <Text className="text-gray-500 mt-1">{order.date}</Text>
        </View>

        <View
          className={`${style.container} px-3 py-1 rounded-full flex-row items-center`}
        >
          <Text className={`${style.text} text-xs`}>{order.status}</Text>
        </View>
      </View>

      <View className="h-[1px] bg-gray-100 my-3" />

      <Text className="text-gray-600">{order.menu}</Text>
    </TouchableOpacity>
  );
};

export default OrderCard;
