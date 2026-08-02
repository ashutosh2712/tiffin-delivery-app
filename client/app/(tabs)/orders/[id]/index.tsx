import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

// const ACTIONS = {
//   UPCOMING: {
//     title: "Cancel Order",
//     color: "bg-red-500",
//     onPress: handleCancel,
//   },
//   PREPARING: {
//     title: "Preparing Your Meal",
//     color: "bg-gray-200",
//     disabled: true,
//   },
//   OUT_FOR_DELIVERY: {
//     title: "Track Delivery",
//     color: "bg-blue-500",
//     onPress: handleTrack,
//   },
//   DELIVERED: {
//     title: "Leave Review",
//     color: "bg-green-500",
//     onPress: handleReview,
//   },
//   CANCELLED: {
//     title: "Order Cancelled",
//     color: "bg-gray-300",
//     disabled: true,
//   },
// };

const OrderDetailsScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const handleReview = () => {
    router.push(`/orders/${id}/review`);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-4 flex-row items-center">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 rounded-full bg-white justify-center items-center"
          >
            <Ionicons name="arrow-back" size={22} color="#111827" />
          </TouchableOpacity>

          <Text className="ml-4 text-2xl font-semibold text-gray-900 mr-6">
            Order Details
          </Text>
          {/* order Hero section */}
        </View>
        <View className="mx-5 mt-6 bg-white rounded-3xl overflow-hidden">
          {/* Kitchen Image */}
          <View className="relative">
            <Image
              source={require("../../../../assets/images/chef-img.jpg")}
              className="w-full h-52"
              resizeMode="cover"
            />

            {/* Favourite Button */}
            <TouchableOpacity className="absolute top-4 right-4 bg-white p-2.5 rounded-full">
              <Ionicons name="heart-outline" size={20} color="#EF4444" />
            </TouchableOpacity>
          </View>

          {/* Kitchen Details */}
          <View className="p-5">
            <Text className="text-2xl font-bold text-gray-900">
              Maa's Kitchen
            </Text>

            {/* Rating Row */}
            <View className="flex-row items-center mt-3">
              <Ionicons name="star" size={18} color="#FACC15" />

              <Text className="ml-1 text-gray-800 font-medium">4.8</Text>

              <Text className="text-gray-400">{"  •  "}</Text>

              <Text className="text-gray-600">2.5 km</Text>

              <Text className="text-gray-400">{"  •  "}</Text>

              <Text className="text-gray-600">218 Reviews</Text>
            </View>

            {/* Location */}
            <View className="flex-row items-center mt-4">
              <Ionicons name="location-outline" size={18} color="#6B7280" />

              <Text className="ml-2 text-gray-600">Koramangala, Bangalore</Text>
            </View>
          </View>
        </View>
        {/* Order Status */}
        <View className="mx-5 mt-5 bg-white rounded-3xl p-5">
          {/* Header */}
          <View className="flex-row justify-between items-center">
            <View className="bg-green-100 self-start px-3 py-1 rounded-full flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-green-600 mr-2" />

              <Text className="text-green-700 font-medium">Upcoming</Text>
            </View>

            <Text className="text-sm text-green-600 font-medium">Today</Text>
          </View>

          {/* Description */}

          <Text className="mt-3 text-gray-600 leading-6">
            Your meal is scheduled for delivery.
          </Text>

          {/* Divider */}

          <View className="h-px bg-gray-100 my-4" />

          {/* Delivery Time */}

          <View className="flex-row items-center">
            <Ionicons name="time-outline" size={20} color="#16A34A" />

            <View className="ml-3">
              <Text className="text-sm text-gray-500">Expected Delivery</Text>

              <Text className="text-base font-semibold text-gray-900">
                12:30 PM – 1:00 PM
              </Text>
            </View>
          </View>
        </View>
        {/* Order Items */}
        <View className="mx-5 mt-5 bg-white rounded-3xl p-5">
          <Text className="text-xl font-semibold text-gray-900">
            Today's Meal
          </Text>

          {/* Item 1 */}
          <View className="flex-row items-start mt-5">
            <View className="w-12 h-12 rounded-2xl bg-orange-100 items-center justify-center">
              <Text className="text-2xl">🍛</Text>
            </View>

            <View className="ml-4 flex-1">
              <Text className="text-base font-semibold text-gray-900">
                Rajma Rice
              </Text>

              <Text className="text-sm text-gray-500 mt-1">
                Rich protein curry served with steamed rice.
              </Text>
            </View>
          </View>

          {/* Divider */}
          <View className="h-px bg-gray-100 my-4" />

          {/* Item 2 */}
          <View className="flex-row items-start">
            <View className="w-12 h-12 rounded-2xl bg-green-100 items-center justify-center">
              <Text className="text-2xl">🥗</Text>
            </View>

            <View className="ml-4 flex-1">
              <Text className="text-base font-semibold text-gray-900">
                Fresh Salad
              </Text>

              <Text className="text-sm text-gray-500 mt-1">
                Cucumber, onion & carrot salad.
              </Text>
            </View>
          </View>

          {/* Divider */}
          <View className="h-px bg-gray-100 my-4" />

          {/* Item 3 */}
          <View className="flex-row items-start">
            <View className="w-12 h-12 rounded-2xl bg-blue-100 items-center justify-center">
              <Text className="text-2xl">🥛</Text>
            </View>

            <View className="ml-4 flex-1">
              <Text className="text-base font-semibold text-gray-900">
                Buttermilk
              </Text>

              <Text className="text-sm text-gray-500 mt-1">
                Fresh and served chilled.
              </Text>
            </View>
          </View>
        </View>
        {/* Delivery Address */}
        <View className="mx-5 mt-5 bg-white rounded-3xl p-5">
          {/* Header */}
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Ionicons name="location-outline" size={22} color="#16A34A" />

              <Text className="ml-2 text-xl font-semibold text-gray-900">
                Delivery Address
              </Text>
            </View>

            <View className="bg-green-100 px-3 py-1 rounded-full">
              <Text className="text-green-700 text-xs font-semibold">
                Default
              </Text>
            </View>
          </View>

          {/* Address Type */}
          <View className="flex-row items-center mt-5">
            <View className="w-10 h-10 rounded-full bg-green-100 items-center justify-center">
              <Ionicons name="home" size={20} color="#16A34A" />
            </View>

            <View className="ml-3">
              <Text className="text-lg font-semibold text-gray-900">Home</Text>

              <Text className="text-sm text-gray-500">
                Primary delivery address
              </Text>
            </View>
          </View>

          {/* Address */}
          <View className="mt-5">
            <Text className="text-gray-700 leading-6">
              Flat 302, Green Valley Apartments
            </Text>

            <Text className="text-gray-700 leading-6">
              5th Cross Road, Koramangala
            </Text>

            <Text className="text-gray-700 leading-6">Bangalore - 560034</Text>
          </View>

          {/* Divider */}
          <View className="h-px bg-gray-100 my-5" />

          {/* Phone */}
          <View className="flex-row items-center">
            <Ionicons name="call-outline" size={18} color="#6B7280" />

            <Text className="ml-2 text-gray-600">+91 98765 43210</Text>
          </View>
        </View>
        {/* Subscription */}
        <View className="mx-5 mt-5 bg-white rounded-3xl p-5">
          {/* Header */}
          <View className="flex-row items-center">
            <Ionicons name="calendar-outline" size={22} color="#16A34A" />

            <Text className="ml-2 text-xl font-semibold text-gray-900">
              Subscription
            </Text>
          </View>

          {/* Plan Card */}
          <View className="mt-5 bg-green-50 rounded-2xl p-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-semibold text-gray-900">
                Monthly Lunch Plan
              </Text>

              <View className="bg-green-500 px-3 py-1 rounded-full">
                <Text className="text-white text-xs font-semibold">ACTIVE</Text>
              </View>
            </View>

            <View className="mt-4">
              <View className="h-2 bg-green-100 rounded-full overflow-hidden">
                <View className="h-full w-3/5 bg-green-500 rounded-full" />
              </View>

              <Text className="mt-2 text-sm text-green-700 font-medium">
                18 of 30 meals remaining
              </Text>
            </View>
          </View>

          {/* Dates */}

          <View className="flex-row justify-between mt-6">
            <View>
              <Text className="text-sm text-gray-500">Started On</Text>

              <Text className="mt-1 text-base font-semibold text-gray-900">
                12 Jul 2026
              </Text>
            </View>

            <View className="items-end">
              <Text className="text-sm text-gray-500">Ends On</Text>

              <Text className="mt-1 text-base font-semibold text-gray-900">
                10 Aug 2026
              </Text>
            </View>
          </View>
        </View>
        {/* Order details */}
        <View className="mx-5 mt-5 mb-8 bg-white rounded-3xl p-5">
          {/* Header */}
          <View className="flex-row items-center">
            <Ionicons name="document-text-outline" size={22} color="#16A34A" />

            <Text className="ml-2 text-xl font-semibold text-gray-900">
              Order Information
            </Text>
          </View>

          {/* Info Rows */}

          <View className="mt-5">
            <View className="flex-row justify-between py-3">
              <Text className="text-gray-500">Order ID</Text>

              <Text className="font-semibold text-gray-900">#ORD240712001</Text>
            </View>

            <View className="h-px bg-gray-100" />

            <View className="flex-row justify-between py-3">
              <Text className="text-gray-500">Meal Type</Text>

              <Text className="font-semibold text-gray-900">Lunch</Text>
            </View>

            <View className="h-px bg-gray-100" />

            <View className="flex-row justify-between py-3">
              <Text className="text-gray-500">Delivery Date</Text>

              <Text className="font-semibold text-gray-900">12 Jul 2026</Text>
            </View>

            <View className="h-px bg-gray-100" />

            <View className="flex-row justify-between py-3">
              <Text className="text-gray-500">Delivery Time</Text>

              <Text className="font-semibold text-gray-900">
                12:30 PM – 1:00 PM
              </Text>
            </View>

            <View className="h-px bg-gray-100" />

            <View className="flex-row justify-between py-3">
              <Text className="text-gray-500">Payment</Text>

              <View className="bg-green-100 px-3 py-1 rounded-full">
                <Text className="text-green-700 text-xs font-semibold">
                  PAID
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Review section */}
        <TouchableOpacity
          onPress={handleReview}
          className="bg-[#42CA82] rounded-2xl py-4 items-center mb-32 ml-2 mr-2"
        >
          <Text className="text-white text-lg font-semibold">Leave Review</Text>
        </TouchableOpacity>
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4">
        <TouchableOpacity className="bg-red-500 rounded-2xl py-4 items-center">
          <Text className="text-white text-lg font-semibold">Cancel Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetailsScreen;
