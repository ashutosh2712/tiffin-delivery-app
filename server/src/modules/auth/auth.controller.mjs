import * as authService from "./auth.service.mjs";

/**
 * POST /api/auth/send-otp
 */
export async function sendOtp(req, res) {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({
        success: false,
        message: "Phone number is required",
      });
    }

    const result = await authService.sendOtp(phone);

    return res.status(200).json(result);
  } catch (error) {
    console.error("Send OTP Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to send OTP",
    });
  }
}

/**
 * POST /api/auth/verify-otp
 */
export async function verifyOtp(req, res) {
  try {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
      return res.status(400).json({
        success: false,
        message: "Phone number and OTP are required",
      });
    }

    const result = await authService.verifyOtp(phone, otp);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      ...result,
    });
  } catch (error) {
    console.error("Verify OTP Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "OTP verification failed",
    });
  }
}

/**
 * POST /api/auth/logout
 */
export async function logout(req, res) {
  try {
    const result = await authService.logout();

    return res.status(200).json(result);
  } catch (error) {
    console.error("Logout Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Logout failed",
    });
  }
}
