import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddressForm = () => {
  const [addressType, setAddressType] = useState("Home");
  const [isDefault, setIsDefault] = useState(true);

  const [flat, setFlat] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    if (isEditMode) {
      setAddressType("Home");

      setFlat("Flat 101, Prestige Residency");
      setStreet("Koramangala 5th Block");
      setLandmark("Near Forum Mall");
      setCity("Bangalore");
      setPincode("560034");
    }
  }, [isEditMode]);

  const params = useLocalSearchParams();

  const { id } = params;

  const isEditMode = !!id;

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      {/* Back Button */}
      <View className="absolute top-12 left-5 z-10 mt-2">
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

      <View className="flex-col items-center px-5 pt-14 pb-6 justify-space-between">
        <Text className="text-xl font-semibold text-gray-900 ml-3">
          {isEditMode ? "Edit Address" : "Add Address"}
        </Text>
        {isEditMode && (
          <Text className="text-gray-500 mt-2 text-sm">
            Update your saved address details
          </Text>
        )}
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* search address header */}
        {!isEditMode && (
          <View className="px-5 mt-2 mb-4">
            <Text className="text-sm text-gray-500 mb-2">Search Location</Text>

            <View className="flex-row items-center border border-gray-200 rounded-xl px-4 py-4 ">
              <Ionicons name="search-outline" size={20} color="#9CA3AF" />

              <TextInput
                placeholder="Search area, street, or building"
                placeholderTextColor="#9CA3AF"
                className="flex-1 ml-3 text-gray-900"
              />
            </View>
          </View>
        )}
        {/* Address Type Selector */}
        <View className="px-5">
          <Text className="text-sm text-gray-500 mb-3">Address Type</Text>

          <View className="flex-row">
            {["Home", "Office", "Other"].map((type) => {
              const selected = addressType === type;

              return (
                <TouchableOpacity
                  key={type}
                  onPress={() => setAddressType(type)}
                  className={`mr-3 px-5 py-3 rounded-full ${
                    selected ? "bg-[#42CA82]" : "bg-gray-100"
                  }`}
                >
                  <Text
                    className={`font-medium ${
                      selected ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        {/* Add a location helper card */}
        {!isEditMode && (
          <TouchableOpacity className="mx-5 mt-4 bg-[#F9FAFB] rounded-2xl p-4">
            <View className="flex-row items-center">
              <Ionicons name="locate-outline" size={20} color="#42CA82" />

              <Text className="ml-2 font-medium text-gray-900">
                Use Current Location
              </Text>
            </View>
          </TouchableOpacity>
        )}

        {/* Full Address Field */}
        {/* <View className="px-5 mt-8">
        <Text className="text-sm text-gray-500 mb-2">Full Address</Text>

        <TextInput
          multiline
          numberOfLines={4}
          placeholder="Enter complete address"
          textAlignVertical="top"
          className="border border-gray-200 rounded-2xl p-4 min-h-[120px]"
        />
      </View> */}
        {/* Flat/House No, Building Name */}
        <View className="px-5 mt-6">
          <Text className="text-sm text-gray-500 mb-2">
            Flat/House No, Building Name
          </Text>

          <TextInput
            value={flat}
            onChangeText={setFlat}
            placeholder="Flat 101, Building A"
            className="border border-gray-200 rounded-xl p-4"
          />
        </View>
        {/* Area, Street, Sector */}
        <View className="px-5 mt-6">
          <Text className="text-sm text-gray-500 mb-2">
            Area, Street, Sector
          </Text>

          <TextInput
            value={street}
            onChangeText={setStreet}
            placeholder="Area Name"
            className="border border-gray-200 rounded-xl p-4"
          />
        </View>
        {/* Landmark Field */}
        <View className="px-5 mt-6">
          <Text className="text-sm text-gray-500 mb-2">
            Landmark (Optional)
          </Text>

          <TextInput
            value={landmark}
            onChangeText={setLandmark}
            placeholder="Near Forum Mall"
            className="border border-gray-200 rounded-xl p-4"
          />
        </View>
        {/* City Field */}
        <View className="px-5 mt-6">
          <Text className="text-sm text-gray-500 mb-2">City</Text>

          <TextInput
            value={city}
            onChangeText={setCity}
            placeholder="City Name"
            className="border border-gray-200 rounded-xl p-4"
          />
        </View>
        {/* PinCode */}
        <View className="px-5 mt-6">
          <Text className="text-sm text-gray-500 mb-2">Pincode</Text>

          <TextInput
            keyboardType="numeric"
            value={pincode}
            onChangeText={setPincode}
            placeholder="560034"
            className="border border-gray-200 rounded-xl p-4"
          />
        </View>
        {/* Default Address Toggle */}
        <View className="px-5 mt-8">
          <TouchableOpacity
            onPress={() => setIsDefault(!isDefault)}
            className="flex-row items-center"
          >
            <Ionicons
              name={isDefault ? "checkbox" : "square-outline"}
              size={22}
              color="#42CA82"
            />

            <Text className="ml-3 text-gray-900">Set as default address</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* Sticky Save Button */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4">
        <TouchableOpacity className="bg-[#42CA82] py-4 rounded-xl">
          <Text className="text-white text-center font-semibold">
            {isEditMode ? "Update Address" : "Save Address"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddressForm;
