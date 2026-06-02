import React from 'react'
import ProductCard from '@/app/components/user components/Store/ProductCard'
import { getProduct } from "@/api_call/api";
import Link from 'next/link';

export default async function Page({ searchParams }) {
  const searchPromise = await searchParams;
  const page = Number(searchPromise.page) || 1;
const limit = Number(searchPromise.limit) || 12;
  const sort = searchPromise.sort || null
  const min_price = searchPromise?.min_price || null;
  const max_price = searchPromise?.max_price || null;
  const brand_slug = searchPromise?.brand_slug
    ? Array.isArray(searchPromise.brand_slug)
      ? searchPromise.brand_slug
      : [searchPromise.brand_slug]
    : [];
  const color_slug = searchPromise?.color_slug
    ? Array.isArray(searchPromise.color_slug)
      ? searchPromise.color_slug
      : [searchPromise.color_slug]
    : [];
  const category_slug = searchPromise?.category_slug || null;

  const Products_res = await getProduct({ status: true, brand_slug, category_slug, color_slug, min_price, max_price, sort,page,limit })
  const products = Products_res?.data || [];
  const pages = Products_res?.pages || 1;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 pt-6 gap-3">
        {products.map((items) => (
          <Link key={items._id} href={`/singleProduct/${items?.slug}`}>
            <ProductCard items={items} user={null} />
          </Link>
        ))}
      </div>

      {!products.length && (
        <div className="my-10 rounded-md border border-gray-100 bg-white px-4 py-12 text-center">
          <p className="text-lg font-semibold text-gray-900">No products found</p>
          <p className="mt-2 text-sm text-gray-500">Try changing filters or search again later.</p>
        </div>
      )}
  
      <div className="flex justify-center items-center gap-4 mt-8 pb-8">
        {page > 1 && (
          <Link
            href={`?page=${page - 1}&limit=${limit}`}
            className="px-4 py-2 border rounded-lg"
          >
            Prev
          </Link>
        )}
  
        <span>
          Page {page} of {pages}
        </span>
  
        {page < pages && (
          <Link
            href={`?page=${page + 1}&limit=${limit}`}
            className="px-4 py-2 border rounded-lg"
          >
            Next
          </Link>
        )}
      </div>
    </>
  );
}
