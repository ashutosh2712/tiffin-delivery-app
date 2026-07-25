import { prisma } from "../../lib/prisma.mjs";

/**
 * Create a new subscription
 */
export function create(data) {
  return prisma.subscription.create({
    data,
  });
}

/**
 * Get current active/pending subscription of a user
 */
export function findCurrentByUserId(userId) {
  return prisma.subscription.findFirst({
    where: {
      userId,
      status: {
        in: ["PENDING", "ACTIVE", "PAUSED"],
      },
    },
    include: {
      mealPlan: {
        include: {
          kitchen: true,
        },
      },
      address: true,
    },
  });
}

/**
 * Find subscription by ID
 */
export function findById(id) {
  return prisma.subscription.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
      address: true,
      mealPlan: {
        include: {
          kitchen: true,
        },
      },
    },
  });
}

/**
 * Update subscription
 */
export function update(id, data) {
  return prisma.subscription.update({
    where: {
      id,
    },
    data,
  });
}

/**
 * Activate subscription
 */
export function activate(id, tx = prisma) {
  return tx.subscription.update({
    where: {
      id,
    },
    data: {
      status: "ACTIVE",
    },
    include: {
      mealPlan: {
        include: {
          kitchen: true,
        },
      },
      address: true,
    },
  });
}

/**
 * Pause subscription
 */
export function pause(id, pauseStart, pauseEnd) {
  return prisma.subscription.update({
    where: {
      id,
    },
    data: {
      status: "PAUSED",
      pauseStart,
      pauseEnd,
    },
    include: {
      address: true,
      mealPlan: {
        include: {
          kitchen: true,
        },
      },
    },
  });
}

/**
 * Resume subscription
 */
export function resume(id) {
  return prisma.subscription.update({
    where: {
      id,
    },
    data: {
      status: "ACTIVE",
      pauseStart: null,
      pauseEnd: null,
    },
    include: {
      address: true,
      mealPlan: {
        include: {
          kitchen: true,
        },
      },
    },
  });
}

/**
 * Cancel subscription
 */
export function cancel(id) {
  return prisma.subscription.update({
    where: {
      id,
    },
    data: {
      status: "CANCELLED",
      pauseStart: null,
      pauseEnd: null,
    },
    include: {
      address: true,
      mealPlan: {
        include: {
          kitchen: true,
        },
      },
    },
  });
}

/**
 * Find Meal Plan
 */
export function findMealPlanById(id) {
  return prisma.mealPlan.findUnique({
    where: {
      id,
    },
    include: {
      kitchen: true,
    },
  });
}

/**
 * Find Address
 */
export function findAddressById(id) {
  return prisma.address.findUnique({
    where: {
      id,
    },
  });
}
