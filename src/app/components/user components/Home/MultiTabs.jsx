import { getProduct } from "@/api_call/api";
import MultiTabsClient from "./MulitTabsClient";

export default async function MultiTabs() {
  const Products_res = await getProduct();

  const products = Products_res?.data || [];

  return <MultiTabsClient products={products} user={null} />;
}
