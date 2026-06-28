import { prisma } from "../../lib/prisma.mjs";

export async function findAll() {
  return prisma.kitchen.findMany({
    include: {
      mealPlans: true,
    },
  });
}

export async function findById(id) {
  return prisma.kitchen.findUnique({
    where: {
      id,
    },
    include: {
      mealPlans: true,
    },
  });
}
