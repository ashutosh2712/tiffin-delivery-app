import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ../ takes you from prisma/ -> server/
// ../../ takes you from server/ -> project root
dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

import { PrismaClient, MealType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  await prisma.mealPlan.deleteMany();
  await prisma.kitchen.deleteMany();

  const annapurna = await prisma.kitchen.create({
    data: {
      name: "Annapurna Kitchen",
      description: "Healthy homemade North Indian meals.",
      cuisineType: "North Indian",
      rating: 4.8,
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      deliveryTime: 30,
    },
  });

  const shanti = await prisma.kitchen.create({
    data: {
      name: "Shanti Tiffin",
      description: "Traditional South Indian tiffin service.",
      cuisineType: "South Indian",
      rating: 4.6,
      imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
      deliveryTime: 25,
    },
  });

  const fitBowl = await prisma.kitchen.create({
    data: {
      name: "Fit Bowl Kitchen",
      description: "High protein healthy meal plans.",
      cuisineType: "Healthy",
      rating: 4.9,
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      deliveryTime: 20,
    },
  });

  await prisma.mealPlan.createMany({
    data: [
      {
        kitchenId: annapurna.id,
        title: "Veg Lunch Plan",
        mealType: MealType.LUNCH,
        durationDays: 30,
        price: 3600,
        pricePerMeal: 120,
        isVeg: true,
      },
      {
        kitchenId: annapurna.id,
        title: "Veg Dinner Plan",
        mealType: MealType.DINNER,
        durationDays: 30,
        price: 3300,
        pricePerMeal: 110,
        isVeg: true,
      },
      {
        kitchenId: shanti.id,
        title: "South Indian Lunch",
        mealType: MealType.LUNCH,
        durationDays: 30,
        price: 3000,
        pricePerMeal: 100,
        isVeg: true,
      },
      {
        kitchenId: fitBowl.id,
        title: "Protein Lunch Plan",
        mealType: MealType.LUNCH,
        durationDays: 30,
        price: 4500,
        pricePerMeal: 150,
        isVeg: false,
      },
    ],
  });

  console.log("✅ Database seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
