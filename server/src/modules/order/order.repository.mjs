import { prisma } from "../../lib/prisma.mjs";

/**
 * Create multiple orders
 */
export function createMany(data, tx = prisma) {
  return tx.order.createMany({
    data,
  });
}

/**
 * Get orders by subscription
 */
export function findBySubscriptionId(subscriptionId) {
  return prisma.order.findMany({
    where: {
      subscriptionId,
    },
    include: {
      mealPlan: {
        include: {
          kitchen: true,
        },
      },
      address: true,
    },
    orderBy: {
      deliveryDate: "asc",
    },
  });
}

/**
 * Get all orders for a user
 */
export async function findByUserId(
  userId,
  filters = {},
  pagination = {},
  sorting = {},
) {
  const where = {
    userId,
  };

  if (filters.status) {
    where.status = filters.status;
  }

  if (filters.mealType) {
    where.mealType = filters.mealType;
  }

  const page = pagination.page ?? 1;
  const limit = pagination.limit ?? 10;

  const [total, orders] = await prisma.$transaction([
    prisma.order.count({
      where,
    }),

    prisma.order.findMany({
      where,

      include: {
        mealPlan: {
          include: {
            kitchen: true,
          },
        },
        address: true,
        subscription: true,
      },

      orderBy: {
        deliveryDate: sorting.order ?? "asc",
      },

      skip: (page - 1) * limit,

      take: limit,
    }),
  ]);

  return {
    orders,
    total,
  };
}

export function findById(id) {
  return prisma.order.findUnique({
    where: {
      id,
    },

    include: {
      mealPlan: {
        include: {
          kitchen: true,
        },
      },
      address: true,
      subscription: true,
    },
  });
}

/**
 * Update an order's status
 */
export function updateStatus(id, status, tx = prisma) {
  return tx.order.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });
}
