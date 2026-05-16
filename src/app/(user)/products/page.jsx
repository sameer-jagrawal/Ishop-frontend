import React from 'react'
import ProductCard from '@/app/components/user components/Store/ProductCard'
import { getProduct } from "@/api_call/api";
import { getMe } from '@/api_call/serverApi';
import Link from 'next/link';

export default async function page({ searchParams }) {
  const searchPromise = await searchParams;
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

  const Products_res = await getProduct({ status: true, brand_slug, category_slug, color_slug, min_price, max_price, sort })
  const user = await getMe()
  const products = Products_res?.data;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 pt-6 gap-3'>
      {products?.map((items) => {
        return (
          <Link key={items._id} href={`/singleProduct/${items?.slug}`}>
            <ProductCard items={items} user={user} />
          </Link>
        )
      })}
    </div>
  )
}
