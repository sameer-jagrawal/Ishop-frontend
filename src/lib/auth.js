const SESSION_COOKIE_BY_TYPE = {
  user: "jwt",
  admin: "admin_jwt",
};

export async function setAuthSession(token, type = "user") {
  if (typeof window !== "undefined" && token) {
    if (type === "admin") {
      const admin = JSON.parse(localStorage.getItem("admin") || "{}");
      localStorage.setItem("admin", JSON.stringify({ ...admin, token }));
    } else {
      localStorage.setItem("jwt", token);
    }
  }

  const res = await fetch("/api/auth/session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, type }),
  });
  return res.ok;
}

export async function clearAuthSession(type = "user") {
  if (typeof window !== "undefined") {
    if (type === "admin") {
      localStorage.removeItem("admin");
    } else if (type === "all") {
      localStorage.removeItem("jwt");
      localStorage.removeItem("admin");
    } else {
      localStorage.removeItem("jwt");
    }
  }

  const cookieName = SESSION_COOKIE_BY_TYPE[type] || type;
  const url = type === "all"
    ? "/api/auth/session?type=all"
    : `/api/auth/session?cookie=${encodeURIComponent(cookieName)}`;

  await fetch(url, { method: "DELETE" });
}
