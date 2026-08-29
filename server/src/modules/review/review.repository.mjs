import { prisma } from "../../lib/prisma.mjs";

/**
 * Find order by ID
 */
export const findOrderById = async (orderId) => {
  return prisma.order.findUnique({
    where: {
      id: orderId,
    },

    include: {
      mealPlan: {
        include: {
          kitchen: true,
        },
      },

      kitchen: true,
    },
  });
};

/**
 * Find review by order ID
 */
export const findReviewByOrderId = async (orderId) => {
  return prisma.review.findUnique({
    where: {
      orderId,
    },

    include: {
      photos: true,

      kitchen: {
        select: {
          id: true,
          name: true,
          imageUrl: true,
        },
      },
    },
  });
};

/**
 * Create review
 */
export const createReview = async ({
  orderId,
  userId,
  kitchenId,
  rating,
  comment,
  photos = [],
}) => {
  return prisma.review.create({
    data: {
      rating,
      comment,

      order: {
        connect: {
          id: orderId,
        },
      },

      user: {
        connect: {
          id: userId,
        },
      },

      kitchen: {
        connect: {
          id: kitchenId,
        },
      },

      photos: {
        create: photos.map((imageUrl) => ({
          imageUrl,
        })),
      },
    },

    include: {
      photos: true,
    },
  });
};

/**
 * Update review
 */
export const updateReview = async (reviewId, { rating, comment }) => {
  return prisma.review.update({
    where: {
      id: reviewId,
    },
    data: {
      ...(rating !== undefined && { rating }),
      ...(comment !== undefined && { comment }),
    },
    include: {
      photos: true,
    },
  });
};

/**
 * Replace review photos
 *
 * We delete existing photos and create the new list.
 * This keeps the frontend API simple for V1.
 */
export const replaceReviewPhotos = async (reviewId, photos = []) => {
  return prisma.$transaction([
    prisma.reviewPhoto.deleteMany({
      where: {
        reviewId,
      },
    }),

    prisma.reviewPhoto.createMany({
      data: photos.map((imageUrl) => ({
        reviewId,
        imageUrl,
      })),
    }),
  ]);
};

export const findKitchenById = async (kitchenId) => {
  return prisma.kitchen.findUnique({
    where: {
      id: kitchenId,
    },
  });
};

/**
 * Get reviews for a kitchen
 */
export const findKitchenReviews = async (kitchenId, skip = 0, take = 10) => {
  return prisma.review.findMany({
    where: {
      kitchenId,
    },

    include: {
      photos: true,

      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },

    skip,
    take,
  });
};

/**
 * Count kitchen reviews
 */
export const countKitchenReviews = async (kitchenId) => {
  return prisma.review.count({
    where: {
      kitchenId,
    },
  });
};

export const updateReviewWithPhotos = async (
  reviewId,
  { rating, comment, photos },
) => {
  return prisma.$transaction(async (tx) => {
    const review = await tx.review.update({
      where: {
        id: reviewId,
      },

      data: {
        ...(rating !== undefined && { rating }),
        ...(comment !== undefined && { comment }),
      },
    });

    // Only update photos if photos were provided
    if (photos !== undefined) {
      await tx.reviewPhoto.deleteMany({
        where: {
          reviewId,
        },
      });

      if (photos.length > 0) {
        await tx.reviewPhoto.createMany({
          data: photos.map((imageUrl) => ({
            reviewId,
            imageUrl,
          })),
        });
      }
    }

    return tx.review.findUnique({
      where: {
        id: review.id,
      },

      include: {
        photos: true,
        kitchen: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
          },
        },
      },
    });
  });
};
