import express from "express";

import {
  createReview,
  getReviewByOrderId,
  updateReview,
  getKitchenReviews,
} from "./review.controller.mjs";
import { authMiddleware } from "../../middleware/auth.middleware.mjs";

const router = express.Router();

router.post("/orders/:orderId/review", authMiddleware, createReview);

router.get("/orders/:orderId/review", authMiddleware, getReviewByOrderId);

router.patch("/orders/:orderId/review", authMiddleware, updateReview);

router.get("/kitchens/:kitchenId/reviews", getKitchenReviews);

export default router;
