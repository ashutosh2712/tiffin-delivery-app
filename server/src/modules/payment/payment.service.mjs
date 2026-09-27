import { findById } from "../subscription/subscription.repository.mjs";
import crypto from "crypto";
import { prisma } from "../../lib/prisma.mjs";

import * as subscriptionService from "../subscription/subscription.service.mjs";

import razorpay from "../../lib/razorpay.mjs";
import {
  createPayment,
  findPaymentByRazorpayOrderId,
  markPaymentSuccessful,
  findAllByUserId,
  findPayById,
} from "./payment.repository.mjs";

export const createPaymentOrderService = async (userId, subscriptionId) => {
  const subscription = await findById(subscriptionId);

  if (!subscription) {
    throw new Error("Subscription not found");
  }

  // Important: user can only pay for their own subscription
  if (subscription.user.id !== userId) {
    throw new Error("Unauthorized subscription");
  }

  // We will use the actual subscription amount here.
  const amount = Number(subscription.mealPlan.price);

  if (!amount || amount <= 0) {
    throw new Error("Invalid subscription amount");
  }

  // Razorpay expects the amount in the smallest currency unit.
  const razorpayOrder = await razorpay.orders.create({
    amount: Math.round(amount * 100),
    currency: "INR",
    receipt: `subscription_${subscriptionId}`,
  });

  const payment = await createPayment({
    userId,
    subscriptionId,

    razorpayOrderId: razorpayOrder.id,

    amount,

    currency: "INR",

    status: "PENDING",
  });

  return {
    paymentId: payment.id,

    razorpayOrderId: razorpayOrder.id,

    amount: razorpayOrder.amount,

    currency: razorpayOrder.currency,

    razorpayKeyId: process.env.RAZORPAY_KEY_ID,
  };
};

export async function verifyPaymentService(
  userId,
  razorpayPaymentId,
  razorpayOrderId,
  razorpaySignature,
) {
  const payment = await findPaymentByRazorpayOrderId(razorpayOrderId);

  if (!payment) {
    throw new Error("Payment not found.");
  }

  if (payment.userId !== userId) {
    throw new Error("Unauthorized.");
  }

  if (payment.status !== "PENDING") {
    throw new Error("Payment has already been processed.");
  }

  const generatedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpayOrderId}|${razorpayPaymentId}`)
    .digest("hex");

  if (generatedSignature !== razorpaySignature) {
    throw new Error("Invalid payment signature.");
  }

  // Continue with payment update + subscription activation...

  return prisma.$transaction(async (tx) => {
    const updatedPayment = await markPaymentSuccessful(
      payment.id,
      razorpayPaymentId,
      tx,
    );

    const activatedSubscription =
      await subscriptionService.activateSubscription(
        userId,
        payment.subscriptionId,
        tx,
      );

    return {
      verified: true,
      payment: updatedPayment,
      subscription: activatedSubscription,
    };
  });
}

export async function getPaymentsForAll(userId) {
  return findAllByUserId(userId);
}

export async function getAllPaymentById(userId, paymentId) {
  const payment = await findPayById(paymentId);

  if (!payment) {
    throw new Error("Payment not found.");
  }

  if (payment.userId !== userId) {
    throw new Error("Unauthorized.");
  }

  return payment;
}
