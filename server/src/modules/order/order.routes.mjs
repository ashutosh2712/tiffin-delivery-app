import { Router } from "express";

import * as orderController from "./order.controller.mjs";

import { authMiddleware } from "../../middleware/auth.middleware.mjs";

const router = Router();

router.get("/", authMiddleware, orderController.getOrders);
router.get("/:id", authMiddleware, orderController.getOrderById);
router.patch("/:id/status", authMiddleware, orderController.updateOrderStatus);

export default router;
