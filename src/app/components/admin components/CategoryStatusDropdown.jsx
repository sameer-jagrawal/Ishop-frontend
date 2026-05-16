"use client";

import StatusDropdown, {
  CATEGORY_STATUS_FIELDS,
} from "./StatusDropdown";

export default function CategoryStatusDropdown({ category }) {
  return (
    <StatusDropdown
      item={category}
      type="category"
      fields={CATEGORY_STATUS_FIELDS}
    />
  );
}
