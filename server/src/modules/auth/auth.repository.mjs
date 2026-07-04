import { prisma } from "../../lib/prisma.mjs";

export async function findUserByPhone(phone) {
  return prisma.user.findUnique({
    where: {
      phone,
    },
  });
}

export async function createUser(phone) {
  return prisma.user.create({
    data: {
      phone,
    },
  });
}
