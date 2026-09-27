import { prisma } from "../../lib/prisma.mjs";

export const createPayment = async (data) => {
  return prisma.payment.create({
    data,
  });
};

export const findPaymentById = async (id) => {
  return prisma.payment.findUnique({
    where: {
      id,
    },
    include: {
      subscription: true,
    },
  });
};

export const findPaymentByRazorpayOrderId = async (razorpayOrderId) => {
  return prisma.payment.findUnique({
    where: {
      razorpayOrderId,
    },
  });
};

export const findPaymentByRazorpayPaymentId = async (razorpayPaymentId) => {
  return prisma.payment.findUnique({
    where: {
      razorpayPaymentId,
    },
  });
};

export const findUserPayments = async (userId) => {
  return prisma.payment.findMany({
    where: {
      userId,
    },
    include: {
      subscription: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const updatePayment = async (id, data) => {
  return prisma.payment.update({
    where: {
      id,
    },
    data,
  });
};

export const markPaymentSuccessful = async (
  paymentId,
  razorpayPaymentId,
  tx = prisma,
) => {
  return tx.payment.update({
    where: {
      id: paymentId,
    },
    data: {
      razorpayPaymentId,
      status: "SUCCESS",
      paidAt: new Date(),
    },
  });
};

export async function findAllByUserId(userId) {
  return prisma.payment.findMany({
    where: {
      userId,
    },
    include: {
      subscription: {
        select: {
          id: true,
          status: true,
          startDate: true,
          endDate: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function findPayById(id) {
  return prisma.payment.findUnique({
    where: {
      id,
    },
    include: {
      subscription: {
        select: {
          id: true,
          status: true,
          startDate: true,
          endDate: true,
        },
      },
    },
  });
}
