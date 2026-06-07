import { Text, View } from "react-native";

const PolicySection = ({ title, content }: any) => (
  <View className="mt-8">
    <Text className="text-lg font-semibold text-gray-900">{title}</Text>

    <Text className="text-gray-500 leading-7 mt-3">{content}</Text>
  </View>
);

export default PolicySection;
