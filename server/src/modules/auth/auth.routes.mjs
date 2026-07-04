import express from "express";
import * as authController from "./auth.controller.mjs";

const router = express.Router();

router.post("/send-otp", authController.sendOtp);

router.post("/verify-otp", authController.verifyOtp);

router.post("/logout", authController.logout);

export default router;
