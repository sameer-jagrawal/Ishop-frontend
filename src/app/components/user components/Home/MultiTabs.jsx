import { getProduct } from "@/api_call/api";
import { getMe } from "@/api_call/serverApi";
import MultiTabsClient from "./MulitTabsClient";

export default async function MultiTabs() {
  const Products_res = await getProduct();
  const user = await getMe();

  const products = Products_res?.data || [];

  return <MultiTabsClient products={products} user={user} />;
}
