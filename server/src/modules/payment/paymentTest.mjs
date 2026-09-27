import "../../config/env.mjs";

import crypto from "crypto";

const orderId = "order_ThDlyIq9K38Aop";
const paymentId = "cmukdh6fm0001nyhjpzav5q7d";

const signature = crypto
  .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
  .update(`${orderId}|${paymentId}`)
  .digest("hex");

console.log(signature);
