import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ConfirmModal from "../components/ConfirmModal";

const MenuItem = ({ icon, title, onPress }: any) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex-row items-center justify-between py-4"
  >
    <View className="flex-row items-center">
      <Ionicons name={icon} size={20} color="#374151" />

      <Text className="ml-3 text-gray-900">{title}</Text>
    </View>

    <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
  </TouchableOpacity>
);
const ProfileScreen = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-5 pt-14 pb-6">
        <Text className="text-2xl font-semibold text-gray-900">Profile</Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* User Profile Card */}
        <View className="px-5">
          <View className="bg-[#42CA82] rounded-3xl p-5">
            <View className="flex-row items-center">
              {/* Avatar */}
              <View className="w-14 h-14 rounded-full bg-white items-center justify-center">
                <Text className="text-xl font-semibold text-[#42CA82]">A</Text>
              </View>

              {/* User Info */}
              <View className="ml-4">
                <Text className="text-white text-lg font-semibold">
                  Ashutosh Roy
                </Text>

                <Text className="text-white/80 mt-1">+91 9876543210</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Menu Items */}
        {/* Account Section */}
        <View className="px-5 mt-8">
          <Text className="text-sm text-gray-500 mb-2">Account</Text>

          <View className="bg-white rounded-2xl border border-gray-100 px-4">
            <MenuItem
              icon="location-outline"
              title="Addresses"
              onPress={() => router.push("/profile/addresses")}
            />

            <View className="h-[1px] bg-gray-100" />

            <MenuItem
              icon="restaurant-outline"
              title="Subscription Settings"
              onPress={() => router.push("/subscription/settings-preferences")}
            />
          </View>
        </View>
        {/* Support Section */}
        <View className="px-5 mt-6">
          <Text className="text-sm text-gray-500 mb-2">Support</Text>

          <View className="bg-white rounded-2xl border border-gray-100 px-4">
            <MenuItem
              icon="help-circle-outline"
              title="Help Center"
              onPress={() => router.push("/support/help-center")}
            />

            <View className="h-[1px] bg-gray-100" />

            <MenuItem
              icon="call-outline"
              title="Contact Support"
              onPress={() => router.push("/support/contact")}
            />
          </View>
        </View>
        {/* Preferences Section */}
        <View className="px-5 mt-6">
          <Text className="text-sm text-gray-500 mb-2">Preferences</Text>

          <View className="bg-white rounded-2xl border border-gray-100 px-4">
            <MenuItem
              icon="notifications-outline"
              title="Notifications"
              onPress={() => router.push("/notifications")}
            />

            <View className="h-[1px] bg-gray-100" />

            <MenuItem
              icon="shield-outline"
              title="Privacy Policy"
              onPress={() => router.push("/profile/privacy-policy")}
            />
          </View>
        </View>
        {/* Logout */}
        <View className="px-5 mt-10 mb-10">
          <TouchableOpacity
            className="border border-red-200 py-4 rounded-xl"
            onPress={() => setShowLogoutModal(true)}
          >
            <Text className="text-red-500 text-center font-medium">Logout</Text>
          </TouchableOpacity>
          <ConfirmModal
            visible={showLogoutModal}
            title="Logout"
            message="Are you sure you want to logout from your account?"
            confirmText="Logout"
            destructive
            onCancel={() => setShowLogoutModal(false)}
            onConfirm={() => {
              setShowLogoutModal(false);

              // logout logic
              router.replace("/(auth)/login");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
