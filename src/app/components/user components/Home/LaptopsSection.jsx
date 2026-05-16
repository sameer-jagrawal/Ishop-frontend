import { getCategories, getProduct } from "@/api_call/api";
import LaptopsSectionClient from "./LaptopsSectionClient";

export default async function LaptopsSection() {
  const [categoryRes, productRes] = await Promise.all([
    getCategories({ limit: 6, status: true }),
    getProduct({ limit: 8, status: true }),
  ]);

  const categories = categoryRes?.data || [];
  const products = productRes?.data || [];

  return <LaptopsSectionClient categories={categories} products={products} />;
}
