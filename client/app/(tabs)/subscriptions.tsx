import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function subscriptions() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Content */}
        {/* Header */}
        <View className="px-5 pt-14 pb-6">
          <Text className="text-2xl font-semibold text-gray-900">
            My Subscription
          </Text>

          <Text className="text-gray-500 mt-2">
            Manage your active meal plans
          </Text>
        </View>
        {/* Active Plan Card */}
        <View className="px-5">
          <View
            className="rounded-3xl p-5"
            style={{
              backgroundColor: "#42CA82",
            }}
          >
            {/* Top */}
            <View className="flex-row justify-between items-start">
              <View>
                <Text className="text-white text-lg font-semibold">
                  Home Veg Thali
                </Text>

                <Text className="text-white/80 mt-1">Lunch • Monthly Plan</Text>
              </View>

              <View className="bg-white/20 px-3 py-1 rounded-full">
                <Text className="text-white text-xs">ACTIVE</Text>
              </View>
            </View>

            {/* Divider */}
            <View className="h-[1px] bg-white/20 my-5" />

            {/* Bottom Info */}
            <View className="flex-row justify-between">
              <View>
                <Text className="text-white/70 text-xs">Next Delivery</Text>

                <Text className="text-white font-medium mt-1">Tomorrow</Text>
              </View>

              <View>
                <Text className="text-white/70 text-xs">Valid Till</Text>

                <Text className="text-white font-medium mt-1">12 Jun 2026</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Delivery Info Card */}
        <View className="px-5 mt-6">
          <Text className="text-sm text-gray-500 mb-2">Delivery Address</Text>

          <View className="bg-gray-50 rounded-2xl p-4">
            <Text className="font-medium text-gray-900">Home</Text>

            <Text className="text-gray-500 mt-1">Whitefield, Bangalore</Text>
          </View>
        </View>
        {/* Quick Actions */}
        <View className="px-5 mt-8">
          <Text className="text-sm text-gray-500 mb-3">Quick Actions</Text>

          <View className="flex-row justify-between">
            {/* Pause */}
            <TouchableOpacity
              className="bg-gray-50 rounded-2xl p-4 items-center flex-1 mr-2"
              onPress={() => router.push("/subscription/pause")}
            >
              <Ionicons name="pause-outline" size={22} color="#111827" />

              <Text className="mt-2 font-medium text-gray-900">Pause</Text>
            </TouchableOpacity>

            {/* Edit */}
            <TouchableOpacity
              className="bg-gray-50 rounded-2xl p-4 items-center flex-1 ml-2"
              onPress={() => router.push("/subscription/settings")}
            >
              <Ionicons name="create-outline" size={22} color="#111827" />

              <Text className="mt-2 font-medium text-gray-900">Modify</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Upcoming Meals */}
        <View className="px-5 mt-8">
          <Text className="text-sm text-gray-500 mb-3">Upcoming Meals</Text>

          <View className="bg-white border border-gray-100 rounded-2xl p-4 mb-4">
            <Text className="font-medium text-gray-900">Wednesday Lunch</Text>

            <Text className="text-gray-500 mt-1">
              Paneer Butter Masala • Dal • Rice
            </Text>
          </View>

          <View className="bg-white border border-gray-100 rounded-2xl p-4">
            <Text className="font-medium text-gray-900">Thursday Lunch</Text>

            <Text className="text-gray-500 mt-1">Mix Veg • Chapati • Rice</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
