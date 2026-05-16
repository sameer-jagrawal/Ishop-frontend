import React from "react";
import { getProduct } from "@/api_call/api";
import ProductsSlider from "./swiper/ProductsSlider";

export default async function ProductsSection({ excludeSlug } = {}) {
  const productsRes = await getProduct({ status: true });
  let products = productsRes?.data || [];

  if (excludeSlug) {
    products = products.filter((product) => product.slug !== excludeSlug);
  }

  if (!products.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-extrabold text-slate-950">
        You may also like
      </h2>
      <p className="mt-1 text-sm text-slate-600">
        More products handpicked for you
      </p>
      <div className="mt-6">
        <ProductsSlider products={products} />
      </div>
    </section>
  );
}
