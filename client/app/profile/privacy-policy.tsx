import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PolicySection from "../components/PolicySection";

const PrivacyPolicy = () => {
  const router = useRouter();
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
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        <View className="flex-row items-center px-5 pt-14 pb-6">
          <Text className="text-xl font-semibold text-gray-900 ml-3">
            Privacy Policy
          </Text>
        </View>
        <View className="px-5">
          <Text className="text-sm text-gray-400">Last updated: June 2026</Text>
        </View>
        <View className="px-5">
          <PolicySection
            title="1. Information We Collect"
            content="We collect your name, phone number, address, and subscription preferences to provide meal delivery services."
          />
          <View className="h-[1px] bg-gray-100 mt-8" />
          <PolicySection
            title="2. How We Use Information"
            content="Your information is used to manage subscriptions, process payments, and improve delivery experience."
          />
          <View className="h-[1px] bg-gray-100 mt-8" />
          <PolicySection
            title="3. Payments & Security"
            content="Payments are processed securely through trusted third-party payment providers."
          />

          <View className="h-[1px] bg-gray-100 mt-8" />
          <PolicySection
            title="4. Contact Us"
            content="If you have any questions regarding this privacy policy, please contact our support team."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;
