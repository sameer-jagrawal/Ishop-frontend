export async function setAuthSession(token) {
  const res = await fetch("/api/auth/session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  return res.ok;
}

export async function clearAuthSession() {
  await fetch("/api/auth/session", { method: "DELETE" });
}
