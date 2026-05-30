import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddressCard from "../components/AddressCard";

const addresses = [
  {
    id: 1,
    label: "Home",
    address:
      "Flat 302, Green Residency\n6th Cross, 18th Main\nKoramangala, Bangalore – 560095",
    nameContact: "Ashutosh Roy • 9876543210",
    isDefault: true,
  },
  {
    id: 2,
    label: "Office",
    address: "HSR Layout Sector 2, Bangalore",
    nameContact: "John Doe • 9876543210",
    isDefault: false,
  },
  {
    id: 3,
    label: "Parents' Home",
    address: "Indiranagar, Bangalore",
    nameContact: "Jane Smith • 9876543210",
    isDefault: false,
  },
  {
    id: 4,
    label: "Other",
    address: "Some Other Location, Bangalore",
    nameContact: "John Doe • 9876543210",
    isDefault: false,
  },
  {
    id: 5,
    label: "New Address",
    address: "New Location, Bangalore",
    nameContact: "Ashutosh Roy  • 9876543210",
    isDefault: false,
  },
];

const Addresses = () => {
  return (
    <SafeAreaView className="flex-1 bg-white px-5 items-center">
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
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="flex-row items-center px-5 pt-14 pb-6 justify-center">
          <Text className="text-xl font-medium text-[#111827] ml-3 ">
            Saved Addresses
          </Text>
        </View>
        {/* Address List */}
        <View className="px-5">
          {addresses.map((item) => (
            <AddressCard
              key={item.id}
              label={item.label}
              address={item.address}
              nameContact={item.nameContact}
              isDefault={item.isDefault}
            />
          ))}
        </View>
      </ScrollView>
      {/* Add New Address Button */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4">
        <TouchableOpacity className="bg-[#42CA82] py-4 rounded-xl">
          <Text className="text-white text-center font-semibold">
            Add New Address
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Addresses;
