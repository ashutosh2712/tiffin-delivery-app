import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const topics = [
  "Subscription & Billing",
  "Delivery Issues",
  "Pause / Resume",
  "Payments & Refunds",
];

const faqs = [
  {
    question: "How do I pause meals?",
    answer: "You can pause meals from the subscription screen.",
  },
  {
    question: "Can I change delivery address?",
    answer: "Yes, from Profile → Addresses.",
  },
];

const HelpCenter = () => {
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
      {/* Header */}
      <View className="flex-row items-center px-5 pt-14 pb-6">
        <Text className="text-xl font-semibold text-gray-900 ml-3">
          Help Center
        </Text>
      </View>
      {/* Topics List */}
      <View className="px-5">
        <Text className="text-sm text-gray-500 mb-3">Popular Topics</Text>

        <View className="flex-row flex-wrap">
          {topics.map((topic) => (
            <TouchableOpacity
              key={topic}
              className="bg-gray-100 px-4 py-3 rounded-full mr-3 mb-3"
            >
              <Text className="text-gray-700">{topic}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* FAQs */}
      <View className="px-5 mt-8">
        <Text className="text-sm text-gray-500 mb-3">
          Frequently Asked Questions
        </Text>

        {faqs.map((faq, index) => (
          <View
            key={index}
            className="border border-gray-100 rounded-2xl p-4 mb-4"
          >
            <Text className="font-medium text-gray-900">{faq.question}</Text>

            <Text className="text-gray-500 mt-3 leading-6">{faq.answer}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HelpCenter;
