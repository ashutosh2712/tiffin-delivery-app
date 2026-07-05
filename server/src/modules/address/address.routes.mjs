import express from "express";
import * as addressController from "./address.controller.mjs";
import { authMiddleware } from "../../middleware/auth.middleware.mjs";

const router = express.Router();

// Get all addresses of logged-in user
router.get("/", authMiddleware, addressController.getAddresses);

// Get a single address
router.get("/:id", authMiddleware, addressController.getAddressById);

// Add new address
router.post("/", authMiddleware, addressController.createAddress);

// Update address
router.put("/:id", authMiddleware, addressController.updateAddress);

// Delete address
router.delete("/:id", authMiddleware, addressController.deleteAddress);

export default router;
