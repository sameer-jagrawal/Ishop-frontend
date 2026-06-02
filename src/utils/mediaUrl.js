export const MEDIA_BASE_URL = (
  process.env.NEXT_PUBLIC_MEDIA_BASE_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/api\/?$/, "") ||
  "https://ishop-backend-2mld.onrender.com"
).replace(/\/$/, "");

function mediaUrl(folder, filename) {
  if (!filename) return "";
  if (/^https?:\/\//i.test(filename)) return filename;
  return `${MEDIA_BASE_URL}/${folder}/${filename}`;
}

export function productImageUrl(filename) {
  return mediaUrl("product", filename);
}

export function categoryImageUrl(filename) {
  return mediaUrl("category", filename);
}

export function brandImageUrl(filename) {
  return mediaUrl("brand", filename);
}

export function userImageUrl(filename) {
  return mediaUrl("user", filename);
}
