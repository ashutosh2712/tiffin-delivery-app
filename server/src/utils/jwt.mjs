import jwt from "jsonwebtoken";

/**
 * Generate JWT token
 * @param {Object} user
 * @returns {string}
 */
export function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      phone: user.phone,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "30d",
    },
  );
}

/**
 * Verify JWT token
 * @param {string} token
 * @returns {Object}
 */
export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
