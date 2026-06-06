import { getCategories } from "@/api_call/api";
import PopularCategoriesClient from "./PopularCategoriesClient";

export default async function PopularCategories() {
  const categoryRes = await getCategories({
    is_popular: true,
    status: true,
    limit: 100,
  });
  const categories = categoryRes?.data || [];

  if (!categories.length) {
    return null;
  }

  return (
    <section className="mx-auto mt-2 max-w-7xl bg-white px-4 py-4 md:px-6 md:py-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-medium uppercase tracking-wide text-gray-800">
          Popular Categories
        </h2>
      </div>

      <PopularCategoriesClient categories={categories} />
    </section>
  );
}
