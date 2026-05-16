import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import { getBrand, getCategories, getColor } from "@/api_call/api";
import ColorFilter from "./ColorFilter";
import SortingFilter from "./SortingFilter";

export default async function Filters() {
  const [category_res, brand_res, color_res] = await Promise.all([
    getCategories({ status: true }),
    getBrand({ status: true }),
    getColor({ status: true }),
  ]);
  return (
    <div>
      <SortingFilter />
      <CategoryFilter category={category_res?.data} />
      <BrandFilter brand={brand_res?.data} />
      <PriceFilter />
      <ColorFilter colors={color_res?.data} />
    </div>
  );
}
