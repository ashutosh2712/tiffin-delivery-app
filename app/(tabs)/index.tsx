import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import ChefCard from "../components/ChefCard";
import RecommendedCard from "../components/RecommendedCard";

const recommendedChefs = [
  {
    id: "1",
    name: "Call Me Chow",
    cuisine: "North Indian",
    rating: 4.8,
    price: 120,
    distance: "1.2 km",
    image: require("../../assets/images/chef-card-1.jpg"),
  },
  {
    id: "2",
    name: "Aasha Tiffin",
    cuisine: "South Indian",
    rating: 4.6,
    price: 110,
    distance: "0.8 km",
    image: require("../../assets/images/chef-card-2.jpg"),
  },
];

const topKitchens = [
  {
    id: "1",
    name: "Jade's Kitchen",
    cuisine: "South Indian",
    rating: 4.6,
    price: 110,
    distance: "0.8 km",
    image: require("../../assets/images/chef-card-2.jpg"),
  },
  {
    id: "2",
    name: "Star Biryani",
    cuisine: "South Indian",
    rating: 4.5,
    price: 110,
    distance: "0.8 km",
    image: require("../../assets/images/chef-card-2.jpg"),
  },
  {
    id: "3",
    name: "Family Restaurant",
    cuisine: "South Indian",
    rating: 4.7,
    price: 110,
    distance: "0.8 km",
    image: require("../../assets/images/chef-card-2.jpg"),
  },
];

const index = () => {
  return (
    <ScrollView className="flex-1 bg-white px-5 pt-10 mt-8">
      {/* 🔹 Location */}
      <Text className="text-[#6B7280] text-sm text-center">
        Whitefield, Bangalore
      </Text>

      {/* 🔹 Greeting */}
      <Text className="text-2xl font-semibold text-[#111827] mt-2 mb-6 text-center">
        Good Afternoon, Ashutosh
      </Text>

      {/* Search */}
      <View className="flex-row items-center border border-[#F3F4F6] rounded-[12px] px-2 py-2 mb-6 bg-[#F3F4F6]  text-[16px]">
        {/* country Flag */}
        <Image
          source={require("../../assets/images/search-icon.png")}
          style={{ width: 40, height: 40, marginRight: 8 }}
        />

        <TextInput
          placeholder="Search kitchens..."
          placeholderTextColor="#9CA3AF"
        />
      </View>

      {/* Recommended Section */}

      <Text className="text-lg font-medium text-gray-900 mb-4 text-center">
        Recommended for you
      </Text>
      {/* List */}
      <FlatList
        data={recommendedChefs}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RecommendedCard chef={item} />}
        className="mb-8"
      />

      {/* Top Kitchens */}
      <Text
        className="text-lg font-medium text-gray-900 mb-1 text-center"
        stickyHeaderIndices={[1]}
      >
        Top Kitchens Near You
      </Text>

      <Text className="text-[#6B7280] text-sm mb-4 text-center">
        Rated 4.5+ in Whitefield
      </Text>

      <FlatList
        data={topKitchens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChefCard chef={item} />}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

export default index;
