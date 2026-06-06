const DEFAULT_API_BASE_URL = "http://localhost:5000/api";

export function normalizeApiBaseUrl(value = process.env.NEXT_PUBLIC_API_BASE_URL) {
  const rawBaseUrl = value || DEFAULT_API_BASE_URL;
  const trimmedBaseUrl = rawBaseUrl.trim().replace(/\/+$/, "");

  return trimmedBaseUrl.endsWith("/api")
    ? `${trimmedBaseUrl}/`
    : `${trimmedBaseUrl}/api/`;
}

export function backendOriginFromApiBaseUrl(value = process.env.NEXT_PUBLIC_API_BASE_URL) {
  return normalizeApiBaseUrl(value).replace(/\/api\/?$/, "");
}
