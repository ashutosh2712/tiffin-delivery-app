import * as orderRepository from "./order.repository.mjs";

/**
 * Generate orders for a subscription
 */
export async function generateOrders(subscription, tx) {
  const orders = [];

  const startDate = new Date(subscription.startDate);

  for (let day = 0; day < subscription.mealPlan.durationDays; day++) {
    const deliveryDate = new Date(startDate);
    deliveryDate.setDate(startDate.getDate() + day);

    orders.push({
      userId: subscription.userId,
      subscriptionId: subscription.id,
      mealPlanId: subscription.mealPlanId,
      addressId: subscription.addressId,
      mealType: subscription.mealPlan.mealType,
      deliveryDate,
      status: "UPCOMING",
    });
  }

  await orderRepository.createMany(orders, tx);

  return orders.length;
}

/**
 * Get all orders for a user
 */
export async function getOrders(userId, filters, pagination, sorting) {
  return await orderRepository.findByUserId(
    userId,
    filters,
    pagination,
    sorting,
  );
}

export async function getOrderById(orderId, userId) {
  const order = await orderRepository.findById(orderId);

  if (!order) {
    throw new Error("Order not found.");
  }

  if (order.userId !== userId) {
    throw new Error("Unauthorized.");
  }

  return order;
}

export async function updateOrderStatus(orderId, userId, newStatus) {
  const order = await orderRepository.findById(orderId);

  if (!order) {
    throw new Error("Order not found.");
  }

  if (order.userId !== userId) {
    throw new Error("Unauthorized.");
  }

  const allowedTransitions = {
    UPCOMING: ["CANCELLED", "PREPARING"],
    PREPARING: ["OUT_FOR_DELIVERY"],
    OUT_FOR_DELIVERY: ["DELIVERED"],
    DELIVERED: [],
    CANCELLED: [],
  };

  const allowed = allowedTransitions[order.status] || [];

  if (!allowed.includes(newStatus)) {
    throw new Error(
      `Cannot change order status from ${order.status} to ${newStatus}.`,
    );
  }

  if (order.status !== "UPCOMING") {
    throw new Error(`Order cannot be cancelled because it is ${order.status}.`);
  }

  return await orderRepository.updateStatus(orderId, newStatus);
}
