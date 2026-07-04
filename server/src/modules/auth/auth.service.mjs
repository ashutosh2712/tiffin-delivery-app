import otpStore from "../../lib/otpStore.mjs";
import * as authRepository from "./auth.repository.mjs";
import { generateToken } from "../../utils/jwt.mjs";

const OTP_EXPIRY_MINUTES = 5;

/**
 * Send OTP
 */
export async function sendOtp(phone) {
  // Development OTP
  const otp = "123456";

  const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);

  otpStore.set(phone, {
    otp,
    expiresAt,
  });

  console.log(`OTP for ${phone}: ${otp}`);

  return {
    success: true,
    message: "OTP sent successfully",
  };
}

/**
 * Verify OTP
 */
export async function verifyOtp(phone, otp) {
  const storedOtp = otpStore.get(phone);

  if (!storedOtp) {
    throw new Error("OTP not found");
  }

  if (storedOtp.expiresAt < new Date()) {
    otpStore.delete(phone);

    throw new Error("OTP expired");
  }

  if (storedOtp.otp !== otp) {
    throw new Error("Invalid OTP");
  }

  otpStore.delete(phone);

  let user = await authRepository.findUserByPhone(phone);

  if (!user) {
    user = await authRepository.createUser(phone);
  }

  const token = generateToken(user);

  return {
    token,
    user,
  };
}

/**
 * Logout
 */
export async function logout() {
  return {
    success: true,
    message: "Logged out successfully",
  };
}
