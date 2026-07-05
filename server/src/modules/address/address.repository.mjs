import { prisma } from "../../lib/prisma.mjs";

export function findAllByUserId(userId) {
  return prisma.address.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export function findById(id) {
  return prisma.address.findUnique({
    where: {
      id,
    },
  });
}

export function create(data) {
  return prisma.address.create({
    data,
  });
}

export function update(id, data) {
  return prisma.address.update({
    where: {
      id,
    },
    data,
  });
}

export function remove(id) {
  return prisma.address.delete({
    where: {
      id,
    },
  });
}

export function unsetDefault(userId) {
  return prisma.address.updateMany({
    where: {
      userId,
      isDefault: true,
    },
    data: {
      isDefault: false,
    },
  });
}
