import { Router } from "express";
import * as kitchenController from "./kitchen.controller.mjs";

const router = Router();

/**
 * GET /api/kitchens
 * Get all kitchens
 */
router.get("/", kitchenController.getAllKitchens);

/**
 * GET /api/kitchens/:id
 * Get kitchen by id
 */
router.get("/:id", kitchenController.getKitchenById);

export default router;
