import * as subscriptionRepository from "./subscription.repository.mjs";

/**
 * Create Subscription
 */
export async function createSubscription(userId, data) {
  const { mealPlanId, addressId, startDate } = data;

  // Check meal plan
  const mealPlan = await subscriptionRepository.findMealPlanById(mealPlanId);

  if (!mealPlan) {
    throw new Error("Meal plan not found");
  }

  if (!mealPlan.isActive) {
    throw new Error("Meal plan is inactive");
  }

  // Check address
  const address = await subscriptionRepository.findAddressById(addressId);

  if (!address) {
    throw new Error("Address not found");
  }

  if (address.userId !== userId) {
    throw new Error("Unauthorized address");
  }

  // Check existing subscription
  const existingSubscription =
    await subscriptionRepository.findCurrentByUserId(userId);

  if (existingSubscription) {
    throw new Error("You already have an active or pending subscription.");
  }

  // Validate start date
  const selectedDate = new Date(startDate);

  if (selectedDate < new Date()) {
    throw new Error("Start date cannot be in the past.");
  }

  // Create subscription
  return subscriptionRepository.create({
    userId,
    mealPlanId,
    addressId,
    startDate: selectedDate,
    endDate: new Date(
      selectedDate.getTime() + mealPlan.durationDays * 24 * 60 * 60 * 1000,
    ),
    status: "PENDING",
  });
}

/**
 * Get current subscription
 */
export async function getCurrentSubscription(userId) {
  const subscription = await subscriptionRepository.findCurrentByUserId(userId);
  if (!subscription) {
    throw new Error("No active subscription found.");
  }
  return subscription;
}

/**
 * Activate Subscription
 */
export async function activateSubscription(userId, subscriptionId) {
  const subscription = await subscriptionRepository.findById(subscriptionId);

  if (!subscription) {
    throw new Error("Subscription not found.");
  }

  if (subscription.userId !== userId) {
    throw new Error("Unauthorized.");
  }

  if (subscription.status !== "PENDING") {
    throw new Error("Only pending subscriptions can be activated.");
  }

  return subscriptionRepository.activate(subscriptionId);
}

/**
 * Pause Subscription
 */
export async function pauseSubscription(userId, subscriptionId, data) {
  const { pauseStart, pauseEnd } = data;

  const subscription = await subscriptionRepository.findById(subscriptionId);

  if (!subscription) {
    throw new Error("Subscription not found.");
  }

  if (subscription.userId !== userId) {
    throw new Error("Unauthorized.");
  }

  if (subscription.status !== "ACTIVE") {
    throw new Error("Only active subscriptions can be paused.");
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = new Date(pauseStart);
  const end = new Date(pauseEnd);

  if (isNaN(start) || isNaN(end)) {
    throw new Error("Invalid pause dates.");
  }

  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  if (start > end) {
    throw new Error("Pause end date must be after pause start date.");
  }

  const subscriptionStart = new Date(subscription.startDate);
  subscriptionStart.setHours(0, 0, 0, 0);

  const subscriptionEnd = new Date(subscription.endDate);
  subscriptionEnd.setHours(0, 0, 0, 0);

  if (start < today) {
    throw new Error("Pause start date cannot be in the past.");
  }

  if (start < subscriptionStart) {
    throw new Error("Pause cannot start before the subscription starts.");
  }

  if (end > subscriptionEnd) {
    throw new Error("Pause cannot extend beyond the subscription end date.");
  }

  return subscriptionRepository.pause(subscriptionId, start, end);
}

/**
 * Resume Subscription
 */
export async function resumeSubscription(userId, subscriptionId) {
  const subscription = await subscriptionRepository.findById(subscriptionId);

  if (!subscription) {
    throw new Error("Subscription not found.");
  }

  if (subscription.userId !== userId) {
    throw new Error("Unauthorized.");
  }

  if (subscription.status !== "PAUSED") {
    throw new Error("Only paused subscriptions can be resumed.");
  }

  return subscriptionRepository.resume(subscriptionId);
}

/**
 * Cancel Subscription
 */
export async function cancelSubscription(userId, subscriptionId) {
  const subscription = await subscriptionRepository.findById(subscriptionId);

  if (!subscription) {
    throw new Error("Subscription not found.");
  }

  if (subscription.userId !== userId) {
    throw new Error("Unauthorized.");
  }

  if (!["PENDING", "ACTIVE", "PAUSED"].includes(subscription.status)) {
    throw new Error(
      `Cannot cancel a ${subscription.status.toLowerCase()} subscription.`,
    );
  }

  return subscriptionRepository.cancel(subscriptionId);
}
