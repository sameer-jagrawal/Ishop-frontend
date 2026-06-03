"use client";

import StatusDropdown, {
  BRAND_STATUS_FIELDS,
} from "./StatusDropdown";

export default function BrandStatusDropdown({ brand }) {
  return (
    <StatusDropdown
      item={brand}
      type="brand"
      fields={BRAND_STATUS_FIELDS}
    />
  );
}
