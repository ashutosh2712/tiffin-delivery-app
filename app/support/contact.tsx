import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Contact = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Back Button */}
      <View className="absolute top-12 left-5 z-10">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center space-x-2 gap-2 mt-2"
        >
          <Image
            source={require("../../assets/images/back.png")}
            className="w-6 h-6"
          />
          <Text className="text-lg">Back</Text>
        </TouchableOpacity>
      </View>

      <View className="px-5 pt-16">
        <Text className="text-2xl font-semibold text-gray-900">Need Help?</Text>

        <Text className="text-gray-500 mt-3 leading-6">
          Our support team usually responds within 10 minutes.
        </Text>
      </View>
      {/* Contact Options */}
      <TouchableOpacity className="mx-5 mt-10 bg-[#25D366] rounded-2xl p-5 flex-row items-center">
        <Ionicons name="logo-whatsapp" size={24} color="white" />

        <Text className="text-white font-medium ml-3">WhatsApp Support</Text>
      </TouchableOpacity>
      <TouchableOpacity className="mx-5 mt-4 bg-gray-100 rounded-2xl p-5 flex-row items-center">
        <Ionicons name="call-outline" size={22} color="#111827" />

        <Text className="text-gray-900 font-medium ml-3">Call Support</Text>
      </TouchableOpacity>
      <TouchableOpacity className="mx-5 mt-4 bg-gray-100 rounded-2xl p-5 flex-row items-center">
        <Ionicons name="mail-outline" size={22} color="#111827" />

        <Text className="text-gray-900 font-medium ml-3">Email Support</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Contact;
