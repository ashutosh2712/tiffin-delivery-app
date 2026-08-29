import {
  findOrderById,
  findReviewByOrderId,
  createReview,
  updateReviewWithPhotos,
  findKitchenById,
  findKitchenReviews,
  countKitchenReviews,
} from "./review.repository.mjs";

export const createReviewService = async (orderId, userId, reviewData) => {
  const { rating, comment, photos = [] } = reviewData;

  // 1. Find the order
  const order = await findOrderById(orderId);

  if (!order) {
    throw new Error("Order not found");
  }

  // 2. Check order ownership
  if (order.userId !== userId) {
    throw new Error("You are not allowed to review this order");
  }

  // 3. Review allowed only for delivered orders
  if (order.status !== "DELIVERED") {
    throw new Error("You can only review delivered orders");
  }

  // 4. Check if review already exists
  const existingReview = await findReviewByOrderId(orderId);

  if (existingReview) {
    throw new Error("Review already exists for this order");
  }

  // 5. Validate rating
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    throw new Error("Rating must be an integer between 1 and 5");
  }

  // 6. Validate photos
  if (!Array.isArray(photos)) {
    throw new Error("Photos must be an array");
  }

  if (photos.length > 3) {
    throw new Error("You can upload a maximum of 3 photos");
  }

  // 7. Create review
  const kitchenId = order.kitchenId || order.mealPlan?.kitchen?.id;

  if (!kitchenId) {
    throw new Error("Kitchen not found for this order");
  }

  return createReview({
    orderId: order.id,
    userId,
    kitchenId,
    rating,
    comment,
    photos,
  });
};

export const getReviewByOrderIdService = async (orderId, userId) => {
  // 1. Check if order exists
  const order = await findOrderById(orderId);

  if (!order) {
    throw new Error("Order not found");
  }

  // 2. Check ownership
  if (order.userId !== userId) {
    throw new Error("You are not allowed to view the review for this order");
  }

  // 3. Find review
  const review = await findReviewByOrderId(orderId);

  if (!review) {
    throw new Error("Review not found for this order");
  }

  return review;
};

export const updateReviewService = async (orderId, userId, reviewData) => {
  const { rating, comment, photos } = reviewData;

  // 1. Check order exists
  const order = await findOrderById(orderId);

  if (!order) {
    throw new Error("Order not found");
  }

  // 2. Check ownership
  if (order.userId !== userId) {
    throw new Error("You are not allowed to update this review");
  }

  // 3. Find existing review
  const review = await findReviewByOrderId(orderId);

  if (!review) {
    throw new Error("Review not found for this order");
  }

  // 4. Validate rating only if provided
  if (rating !== undefined) {
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      throw new Error("Rating must be an integer between 1 and 5");
    }
  }

  // 5. Validate photos only if provided
  if (photos !== undefined) {
    if (!Array.isArray(photos)) {
      throw new Error("Photos must be an array");
    }

    if (photos.length > 3) {
      throw new Error("You can upload a maximum of 3 photos");
    }
  }

  // 6. Prevent empty update request
  if (rating === undefined && comment === undefined && photos === undefined) {
    throw new Error("No fields provided for update");
  }

  // 7. Update review
  return updateReviewWithPhotos(review.id, {
    rating,
    comment,
    photos,
  });
};

export const getKitchenReviewsService = async (
  kitchenId,
  page = 1,
  limit = 10,
) => {
  // 1. Validate kitchen
  const kitchen = await findKitchenById(kitchenId);

  if (!kitchen) {
    throw new Error("Kitchen not found");
  }

  // 2. Calculate pagination
  const skip = (page - 1) * limit;

  // 3. Fetch reviews and total count
  const [reviews, total] = await Promise.all([
    findKitchenReviews(kitchenId, skip, limit),
    countKitchenReviews(kitchenId),
  ]);

  return {
    reviews,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};
