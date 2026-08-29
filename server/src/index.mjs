import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

import express from "express";
import kitchenRoutes from "./modules/kitchens/kitchen.routes.mjs";
import authRoutes from "./modules/auth/auth.routes.mjs";
import addressRoutes from "./modules/address/address.routes.mjs";
import subscriptionRoutes from "./modules/subscription/subscription.routes.mjs";
import orderRoutes from "./modules/order/order.routes.mjs";
import reviewRoutes from "./modules/review/review.routes.mjs"; 

const app = express();

// Parse JSON request body
app.use(express.json());

// Parse form-urlencoded data
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/kitchens", kitchenRoutes);
app.use("/api/addresses", addressRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api", reviewRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Express Server started..");
  console.log(`Listening to ${PORT}`);
  console.log("http://localhost:3000/");
});
