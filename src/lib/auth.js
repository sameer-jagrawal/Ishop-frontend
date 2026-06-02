export async function setAuthSession(token) {
  if (typeof window !== "undefined" && token) {
    localStorage.setItem("jwt", token);
  }
  const res = await fetch("/api/auth/session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  return res.ok;
}

export async function clearAuthSession() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    localStorage.removeItem("admin");
  }
  await fetch("/api/auth/session", { method: "DELETE" });
}
