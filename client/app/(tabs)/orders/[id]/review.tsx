import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";

const ratingLabels: Record<number, string> = {
  1: "Very Poor",
  2: "Poor",
  3: "Average",
  4: "Good",
  5: "Excellent",
};

const placeholderRatingMessages: Record<number, string> = {
  1: "Tell us what went wrong...",
  2: "What could be improved?",
  3: "How could we do better?",
  4: "What did you enjoy?",
  5: "What did you love about the meal?",
};

const Review = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);

  const isDisabled = rating === 0;

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      alert("Please allow photo access.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 0.8,
      allowsMultipleSelection: true,
      selectionLimit: 3 - photos.length,
    });

    if (!result.canceled) {
      const newPhotos = result.assets.map((asset) => asset.uri);

      setPhotos([...photos, ...newPhotos]);
    }
  };

  const handleSubmitReview = async () => {
    const payload = {
      orderId: id,
      rating,
      review,
      photos,
    };

    console.log(payload);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Back Button */}
      <View className="absolute top-12 left-5 z-10 mt-2">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center space-x-2 gap-2 mt-2"
        >
          <Image
            source={require("../../../../assets/images/back.png")}
            className="w-6 h-6"
          />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="flex-row items-center px-5 py-4 bg-white border-b border-gray-100">
          <Text className="flex-1 text-center text-xl font-semibold text-[#111827] mr-6">
            Leave a Review
          </Text>
        </View>
        {/* Order Details */}
        <View className="mx-5 mt-6 bg-white rounded-3xl overflow-hidden shadow-sm">
          {/* Kitchen Image */}
          <Image
            source={require("../../../../assets/images/chef-img.jpg")}
            className="w-full h-44"
            resizeMode="cover"
          />
          <View className="p-5">
            {/* Kitchen Name */}
            <Text className="text-2xl font-bold text-gray-900">
              Maa's Kitchen
            </Text>
            {/* Rating */}
            <View className="flex-row items-center mt-2">
              <Ionicons name="star" size={18} color="#FACC15" />
              <Text className="ml-2 text-gray-700">4.8</Text>
              <Text className="text-gray-400">{" • Delivered Today"}</Text>
            </View>
            {/* Divider */}
            <View className="h-px bg-gray-100 my-5" />
            {/* Meal */}
            <Text className="text-lg font-semibold text-gray-900">
              Today's Meal
            </Text>
            <View className="mt-3">
              <Text className="text-gray-600">• Rajma Rice</Text>
              <Text className="text-gray-600 mt-1">• Fresh Salad</Text>
              <Text className="text-gray-600 mt-1">• Buttermilk</Text>
            </View>
          </View>
        </View>
        {/* Rating Section */}
        <View className="mx-5 mt-5 bg-white rounded-3xl p-5">
          <Text className="text-xl font-semibold text-gray-900 text-center">
            How was your meal?
          </Text>

          <Text className="text-gray-500 text-center mt-2">
            Tap the stars to rate your experience
          </Text>

          {/* Stars */}

          <View className="flex-row justify-center mt-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => setRating(star)}
                className="mx-2"
              >
                <Ionicons
                  name={star <= rating ? "star" : "star-outline"}
                  size={40}
                  color="#FACC15"
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Rating Text */}

          {rating > 0 && (
            <Text className="text-center text-lg font-semibold text-green-600 mt-5">
              ⭐{ratingLabels[rating]}
            </Text>
          )}
        </View>
        {/* Review Textarea */}
        <View className="mx-5 mt-5 bg-white rounded-3xl p-5">
          <Text className="text-xl font-semibold text-gray-900">
            Tell us more
          </Text>

          <Text className="text-gray-500 mt-1">
            Share your experience with the meal.
          </Text>

          <TextInput
            value={review}
            onChangeText={setReview}
            multiline
            maxLength={300}
            textAlignVertical="top"
            placeholder={
              placeholderRatingMessages[rating] || "Share your experience"
            }
            className="placeholder:text-gray-400 mt-4 h-36 border border-gray-200 rounded-2xl p-4 text-base"
          />

          <Text className="text-right text-gray-400 mt-2">
            {review.length}/300 characters
          </Text>
        </View>
        <View className="mx-5 mt-5 bg-white rounded-3xl p-5">
          <Text className="text-xl font-semibold text-gray-900">
            Add Photos
          </Text>

          <Text className="text-gray-500 mt-1">
            Help others by sharing your meal photos.
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-5"
          >
            {photos.map((photo, index) => (
              <Image
                key={index}
                source={{ uri: photo }}
                className="w-24 h-24 rounded-2xl mr-3"
              />
            ))}

            {photos.length < 3 && (
              <TouchableOpacity
                onPress={pickImage}
                className="w-24 h-24 rounded-2xl border-2 border-dashed border-gray-300 items-center justify-center"
              >
                <Ionicons name="camera-outline" size={30} color="#6B7280" />

                <Text className="text-gray-500 mt-1">Add</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 bg-white px-5 py-5 border-t border-gray-100">
        <TouchableOpacity
          disabled={isDisabled}
          onPress={handleSubmitReview}
          className={`rounded-2xl py-4 items-center ${
            isDisabled ? "bg-gray-300" : "bg-green-500"
          }`}
        >
          <Text className="text-white text-lg font-semibold">
            Submit Review
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Review;
