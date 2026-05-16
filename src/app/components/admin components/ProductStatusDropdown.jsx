"use client";

import StatusDropdown, {
  PRODUCT_STATUS_FIELDS,
} from "./StatusDropdown";

export default function ProductStatusDropdown({ product }) {
  return (
    <StatusDropdown
      item={product}
      type="product"
      fields={PRODUCT_STATUS_FIELDS}
    />
  );
}
