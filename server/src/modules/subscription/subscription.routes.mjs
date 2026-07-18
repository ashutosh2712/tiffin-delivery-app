import express from "express";
import * as subscriptionController from "./subscription.controller.mjs";
import { authMiddleware } from "../../middleware/auth.middleware.mjs";

const router = express.Router();

/**
 * Create Subscription
 */
router.post("/", authMiddleware, subscriptionController.createSubscription);

/**
 * Get current subscription
 */
router.get(
  "/current",
  authMiddleware,
  subscriptionController.getCurrentSubscription,
);

router.post(
  "/:id/activate",
  authMiddleware,
  subscriptionController.activateSubscription,
);

router.post(
  "/:id/pause",
  authMiddleware,
  subscriptionController.pauseSubscription,
);

router.post(
  "/:id/resume",
  authMiddleware,
  subscriptionController.resumeSubscription,
);

router.post(
  "/:id/cancel",
  authMiddleware,
  subscriptionController.cancelSubscription,
);

export default router;
