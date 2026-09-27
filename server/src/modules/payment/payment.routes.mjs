import express from "express";

import {
  createPaymentOrder,
  verifyPayment,
  getPayments,
  getPaymentById,
} from "./payment.controller.mjs";

import { authMiddleware } from "../../middleware/auth.middleware.mjs";

const router = express.Router();

router.post("/payments/create-order", authMiddleware, createPaymentOrder);
router.post("/payments/verify", authMiddleware, verifyPayment);
router.get("/payments", authMiddleware, getPayments);
router.get("/payments/:id", authMiddleware, getPaymentById);

export default router;
