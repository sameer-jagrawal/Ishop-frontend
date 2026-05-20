export const MEDIA_BASE_URL = "https://ishop-backend-2mld.onrender.com";

export function productImageUrl(filename) {
  return filename ? `${MEDIA_BASE_URL}/product/${filename}` : "";
}

export function categoryImageUrl(filename) {
  return filename ? `${MEDIA_BASE_URL}/category/${filename}` : "";
}

export function brandImageUrl(filename) {
  return filename ? `${MEDIA_BASE_URL}/brand/${filename}` : "";
}
